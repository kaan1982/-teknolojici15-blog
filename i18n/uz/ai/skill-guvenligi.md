---
title: "Skill xavfsizligi: oʻrnatishdan oldin oʻqishingiz kerak boʻlgan hamma narsa"
excerpt: "Skilllar kod ishga tushirishi, tashqi manbalardan koʻrsatma tortishi mumkin. Ishonchli manba, SKILL.md va skript tekshiruvi, eng kam vakolat va maxfiy kalitlar uchun qoʻllanma."
hook: "Skill oʻrnatish, dastur oʻrnatish demak"
fact: "13,4%"
factLabel: "Jiddiy zaifligi bor skilllar ulushi (Snyk, 2026)"
category: "Sunʼiy intellekt"
---

Skillarni bunchalik kuchli qiladigan narsa ularni xavfli ham qiladi: skill faqat matn emas, bajariladigan kodni ham olib yurishi mumkin. Agent oʻsha skillni yuklaganda, ichidagi koʻrsatmalarga oʻz koʻrsatmasidek amal qiladi va skriptlarini ishga tushira oladi. Shuning uchun Claude hujjatlarining tavsiyasi bir gapda umumlashadi: skill oʻrnatishni dastur oʻrnatish kabi qabul qiling.

## Rasmiy manbalar nima deydi?

Claude hujjatlaridagi xavfsizlik boʻlimi ancha toʻgʻridan-toʻgʻri. Skillardan faqat ishonchli manbalardan, yaʼni oʻzingiz yozgan yoki Anthropic'dan olganlaringizdan foydalanishni tavsiya qiladi. Nomaʼlum manbadan skill ishlatishga majbur boʻlsangiz, "juda ehtiyotkor" boʻlishingizni va ishlatishdan oldin boshidan oxirigacha tekshirishingizni soʻraydi.

Anthropic muhandislik maqolasi ham shu yoʻnalishda: kamroq ishonchli manbalardan kelgan skilllarda paketlangan fayllarni, ayniqsa kod bogʻliqliklari va skriptlarni tekshirishni, shuningdek tashqi tarmoqlarga ulanishni aytadigan koʻrsatmalarni nazorat qilishni tavsiya etadi. Hujjatlar bir xavfni alohida taʼkidlaydi: tashqi manzillardan maʼlumot tortadigan skilllar xavfli, chunki tortilgan kontent yomon niyatli koʻrsatmalarni oʻz ichiga olishi mumkin.

## Maydonda nimalar boʻlmoqda?

Bu ogohlantirishlar nazariy emas. Xavfsizlik kompaniyasi Snyk 2026-yil 5-fevralda eʼlon qilgan "ToxicSkills" tadqiqotida ClawHub va skills.sh manbali 3984 ta skillni skanerladi. Natijalar:

| Topilma | Soni |
|---|---|
| Skanerlangan skill | 3984 |
| Kamida bitta xavfsizlik muammosi borlari | 1467 (36,82 foiz) |
| Kamida bitta jiddiy muammo borlari | 534 (13,4 foiz) |
| Tasdiqlangan zararli yuk | 76 |

Hisobotga koʻra skills.sh maʼlumoti faqat oʻsha saytning tanlangan birinchi 100 ta skillini qamrab oladi, bozorning toʻliq raqamlari esa ClawHub uchun. Koʻrilgan hujum turlari orasida foydalanuvchini ishonchsiz dastur yuklab ishga tushirishga yoʻnaltiruvchi oʻrnatish koʻrsatmalari, kirish maʼlumotlarini tajovuzkorga yuboradigan yashirilgan (Base64 yoki Unicode bilan niqoblangan) buyruqlar, xavfsizlik nazoratini oʻchirish va orqa eshik oʻrnatish urinishlari bor. Tasdiqlangan zararli skilllarning 91 foizida prompt-inyeksiya (prompt injection) ishlatilgan.

> **Bilarmidingiz?** Claude Yordam markaziga koʻra Enterprise tashkilotlar yuklangan skilllar va plaginlarni zararli kontent uchun tekshiradigan skill skanerlashini yoqishi mumkin. Lekin bu xavfsizlik toʻri, oʻqishning oʻrnini bosmaydi. Skillning nima qilishini eng yaxshi, oʻrnatishdan oldin SKILL.md va skriptlarini oʻzingiz ochib oʻqib tushunasiz.

## Oʻrnatishdan oldin nazorat roʻyxati

Hujjatlardagi tavsiyalar va maydondagi topilmalardan chiqargan amaliy roʻyxat:

1. **Manbani tasdiqlang.** Ombor kimniki? Rasmiy kompaniya yoki taniqli ishlab chiquvchimi, yoki nomi maʼlum paketga juda oʻxshash (typosquatting) nusxami?
2. **SKILL.md'ni boshidan oxirigacha oʻqing.** "Avval buni yuklab ishga tushir", "xavfsizlik sozlamasini oʻchir", "mana bu manzilga yubor" kabi ifodalar xavf belgisi.
3. **scripts/ jildini koʻrib chiqing.** Oʻqiy olmaydigan, yashirilgan yoki Base64 bilan kodlangan satrlar boʻlsa, oʻrnatmang.
4. **Tashqi havolalarni tekshiring.** Skill veb-manzildan koʻrsatma yoki maʼlumot tortsa, oʻsha kontent istalgan payt oʻzgarishi mumkinligini unutmang.
5. **Faqat kerakligini oʻrnating.** "Hammasini oʻrnat" oʻrniga bittalab skill tanlash ham kontekstni, ham hujum yuzasini kichraytiradi.

## Eng kam vakolat va maxfiy kalitlar

Skillning qayerda ishlashi ham muhim. Claude hujjatlariga koʻra Claude API muhitida skilllarning tarmoq kirishi yoʻq va ish paytida paket oʻrnata olmaydi. claude.ai'da tarmoq kirishi foydalanuvchi va ma'mur sozlamalariga qarab toʻliq, qisman yoki yopiq boʻlishi mumkin. Claude Code'da esa skilllar kompyuteringizdagi har qanday dastur qadar tarmoq kirishiga ega. Yaʼni mahalliy agentda oʻrnatgan skillingiz sizning vakolatlaringiz bilan ishlaydi.

Shu sababli eng kam vakolat tamoyili juda muhim. Claude Code'da skill frontmatter'idagi allowed-tools maydoni skill chaqirilganda muayyan vositalardan ruxsat soʻramasdan foydalanishni taʼminlaydi. Hujjatlarga koʻra bu ruxsat keyingi xabaringizda tiklanadi. Shunga qaramay, boshqa birov yozgan skillda keng ruxsatlarni koʻrsangiz, uni ongli ravishda tasdiqlamay oʻrnatmaslik yaxshi odat.

Maxfiy kalitlar uchun qoida oddiy: API kalitlari, parollar va kirish tokenlarini hech qachon SKILL.md yoki skill jildiga yozmang. Skillni ulashsangiz yoki omborga yuborsangiz, oʻsha jilddagi hamma narsa ham ketadi. Kalitlarni muhit oʻzgaruvchilarida yoki ishlatadigan vositangizning xavfsiz kirish maʼlumotlari saqlash usulida saqlang va skillga faqat ularga qanday kirishni tushuntiring.

2026-yil oktyabr holatiga koʻra skill ekotizimi juda tez oʻsmoqda va bu oʻsish ilovalar doʻkonlarining dastlabki yillaridagi xavfsizlik muammolarini eslatadi. Yaxshi xabar shu: skillni oʻqish ilovaning manba kodini oʻqishdan ancha oson, chunki katta qismi oddiy matn.

Siz skillni oʻrnatishdan oldin ichini ochib oʻqiysizmi yoki yulduzlar soni va yuklab olishlar raqamiga ishonasizmi?
