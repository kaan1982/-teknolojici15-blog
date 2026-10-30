---
title: "2038 muammosi: baʼzi kompyuterlar nega 1901-yilga qaytadi?"
excerpt: "32 bitli Unix vaqti 2038-yil 19-yanvar 03:14:07 UTC da tugaydi va eski tizimlar sanani 1901-yil 13-dekabr deb oʻylashi mumkin. 2038 muammosi nima va qanday hal qilinmoqda?"
hook: "Kompyuterlar 1901-yilga qaytadi!"
fact: "03:14:07"
factLabel: "2038-yil 19-yanvar, UTC: 32 bitli chegara"
category: "Kompyuter"
---
2000-yilga kirishda butun dunyo "Y2K" deb atalgan kompyuter xatosi haqida gapirgan edi. Endi navbat boshqa sanada: 2038-yil 19-yanvar. Oʻsha kuni soat 03:14:07 (UTC) dan bir soniya oʻtganda, baʼzi eski kompyuterlar taqvimni birdan 1901-yilga aylantirib yuborishi mumkin. Bu fantastik ssenariy emas, oddiy matematik muammo.

## Kompyuterlar vaqtni qanday sanaydi?

Unix va undan kelib chiqqan koʻplab tizimlar vaqtni soat yoki taqvim sifatida emas, bitta son sifatida saqlaydi. Bu son 1970-yil 1-yanvar yarim tunidan (UTC) beri oʻtgan soniyalardir. Buni "Unix vaqti" deyishadi.

Muammo shundaki, bu son koʻplab eski tizimlarda ishorali 32 bitli butun son sifatida saqlanadi. Ishorali 32 bitli son qabul qila oladigan eng katta qiymat 2 147 483 647, yaʼni 2 ning 31-darajasi minus 1. Bu qancha soniya taxminan 68 yilga toʻgʻri keladi. "Ishorali" boʻlishi bitta bit sonning musbat yoki manfiyligini koʻrsatish uchun ajratilishini bildiradi. Shuning uchun 32 bitning hammasi emas, 31 tasi kattalik uchun ishlatiladi.

1970-yilga 68 yil qoʻshsak, 2038-yilga yetamiz. Hisob aniq 2038-yil 19-yanvar, 03:14:07 UTC ni koʻrsatadi.

## Bir soniyadan keyin nima boʻladi?

Hisoblagich eng katta qiymatga yetgach, bir soniyadan keyin toshib ketadi. Mashinalarning eski mexanik kilometr hisoblagichlarini eslang: 999 999 dan keyin 000 000 ga qaytadi. Bu yerda ham shunga oʻxshash narsa yuz beradi, lekin son ishorali boʻlgani uchun qiymat juda katta manfiy songa aylanadi.

Taʼsirlangan tizim bu manfiy sonni 1970-yildan orqaga qarab sanalgan soniyalar deb talqin qiladi. Natija: sana 1901-yil 13-dekabr, soat 20:45:52 (UTC) boʻlib koʻrinadi. Birdan 136 yil orqaga ketgan kompyuterda sertifikatlar, taymerlar, yozuvlar va sanalarni taqqoslash xato ishlay boshlashi mumkin.

> **Bilarmidingiz?** Bu muammo baʼzi dasturlarda 2038-yilni kutmasdan ham yuz berib boʻlgan. Wikipedia'ga koʻra 2006-yilda AOLserver dasturi bir taym-aut qiymatini bir milliard soniya oldinga qoʻyganida 2038 chegarasidan oshib, ishdan chiqqan. Yaʼni "kelajakdagi sanani" hisoblaydigan har qanday dastur chegaraga hozirdanoq urilishi mumkin. Shunga oʻxshash 32 bitli chegara 2022-yilda Microsoft Exchange'da ham muammo chiqargan: yangilanishning versiya raqami vaqt tamgʻasi sifatida oʻqilib, chegaradan oshgach, zararli dasturni tekshirish funksiyalari toʻxtab qolgan.

## Kimlar xavf ostida?

Kundalik ishlatadigan zamonaviy telefon va kompyuterlarning katta qismi endi 64 bitli vaqt qiymatlaridan foydalanadi. Asl xavf uzoq yillar yangilanmasdan ishlaydigan tizimlarda. Wikipedia ayniqsa eski (legacy) va oʻrnatilgan tizimlarni taʼkidlaydi: sanoat boshqaruv qurilmalari, baʼzi tarmoq qurilmalari, avtomobil ichidagi tizimlar kabi bir marta oʻrnatilib, unutilgan mashinalar.

Bunday qurilmalar tez-tez yangilanmagani uchun 2038 kelganda ularning ichida hamon 32 bitli vaqt sanaydigan qism qolgan boʻlishi mumkin.

| 32 bitli ishorali vaqt | 64 bitli ishorali vaqt |
|---|---|
| Eng katta qiymat 2 147 483 647 | Ancha kattaroq diapazon |
| Chegara: 2038-yil 19-yanvar | Chegara: taxminan 292 milliard yildan keyin |
| Eski va oʻrnatilgan tizimlar | Zamonaviy operatsion tizimlar |

## Yechim: kattaroq hisoblagich

Bu yerdagi qiyinchilik texnik emas, koʻproq amaliy. Vaqtni saqlaydigan sonning oʻlchamini oʻzgartirish shu sondan foydalanadigan har bir dasturga, har bir fayl formatiga va har bir maʼlumotlar bazasi maydoniga taʼsir qilishi mumkin. Bitta satrni tuzatish oson; qurilma ichidagi butun dasturiy taʼminotni topib yangilash esa yillar olishi mumkin.

Yechim gʻoyaviy oddiy: vaqtni 64 bitli ishorali son bilan saqlash. Wikipedia'ga koʻra bu toshib ketish paytini taxminan 292 milliard yilga suradi. Yaʼni olamning hozirgi yoshidan ancha uzoqqa.

Bu oʻtish yillardan beri davom etmoqda. Phoronix'ning 2020-yil yanvaridagi xabariga koʻra Linux 5.6 32 bitli tizimlarning 2038 dan keyin ishlashi uchun asos boʻla oladigan birinchi asosiy yadro versiyasi sifatida tayyorlanayotgan edi. Wikipedia 2020-yilda chiqqan Linux 5.6 32 bitli arxitekturalarga 64 bitli vaqt qoʻllab-quvvatlashini qoʻshganini taʼkidlaydi. Bu ishlashi uchun ilovalar ham 64 bitli vaqt bilan qayta kompilyatsiya qilinishi kerak.

Yana bir yechim taklifi sonni ishorasiz (unsigned) qilish. Lekin bu chegarani faqat 2106-yilga suradi va 1970-yildan oldingi sanalardan foydalanishni buzadi. Shuning uchun asosiy yoʻl 64 bitga oʻtish deb qaralmoqda.

Y2K katta falokatga aylanmadi, chunki odamlar oldindan ishladi; sizningcha, 2038 gacha qolgan yillarda ham xuddi shunday sokin qahramonlik takrorlanadimi?
