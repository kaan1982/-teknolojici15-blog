---
title: "Hujjat skilllari: Word, Excel, PowerPoint va PDF'ni agentga oʻrgatish"
excerpt: "Anthropic'ning docx, xlsx, pptx va pdf skilllari nima qiladi, qayerda ishlaydi? Hujjat yaratish uchun haqiqatan ishga yaraydigan rasmiy va yordamchi skilllar."
hook: "Hisobot, jadval, taqdimot: hammasi bitta skill"
fact: "4 HUJJAT"
factLabel: "Tayyor keladigan hujjat skilllari soni"
category: "Sunʼiy intellekt"
---

Sunʼiy intellektga "menga hisobot tayyorla" deyish oson. Qiyini, hisobotning haqiqatan ochiladigan, shakli buzilmagan, formulalari ishlaydigan Word yoki Excel fayli sifatida kelishi. Skillarning birinchi va ehtimol eng koʻp ishlatiladigan turkumi aynan shu: ofis hujjatlari. Bu maqolada faqat mavjudligini tasdiqlagan skillarni koʻrib chiqamiz.

## Toʻrt asosiy tosh: docx, xlsx, pptx, pdf

Claude hujjatlariga koʻra Anthropic tayyor taqdim etadigan (pre-built) toʻrtta hujjat skilli bor. Ular Claude'ning fayl yaratish imkoniyati ortida ishlaydi va Anthropic manba kodlarini anthropics/skills GitHub omborida eʼlon qiladi.

| Skill | Nima qiladi? (rasmiy tavsiflardan) |
|---|---|
| docx | Word hujjatlarini yaratadi, oʻqiydi, tahrirlaydi. Formatlash, shablonlar ham |
| xlsx | Elektron jadval ochadi, tahrirlaydi, formula va grafik qoʻshadi, tartibsiz maʼlumotni tozalaydi |
| pptx | Taqdimot yaratadi, slaydlarni tahrirlaydi, .pptx mazmunini oʻqib tahlil qiladi |
| pdf | Matn va jadval ajratadi, PDF birlashtiradi, boʻladi, shakl toʻldiradi, suv belgisi qoʻshadi |

Ombordagi tavsiflar ancha "qatʼiy" yozilgan. Masalan, pptx skillining tavsifi .pptx fayli kirish yoki chiqish sifatida "qaysidir tarzda" ishga aralashsa, ishlatilishini aytadi. Bu oldingi maqolada aytgan "tavsif tetiklaydi" qoidasining rasmiy namunasi.

## Qayerda ishlatish mumkin?

2026-yil oktyabr holatiga koʻra Claude hujjatlariga muvofiq bu toʻrtta skill claude.ai'da hujjat yaratishda oʻzi ishga tushadi va Claude API'da ham tayyor skill sifatida chaqirilishi mumkin. Claude Code'da esa tayyor hujjat skilllari ichki holda kelmaydi. Lekin anthropics/skills ombori Claude Code uchun plagin bozori sifatida qoʻshilishi va document-skills paketi oʻrnatilishi mumkin. Ombordagi koʻrsatmaga koʻra avval /plugin marketplace add anthropics/skills buyrugʻi bilan bozor qoʻshilib, keyin document-skills@anthropic-agent-skills oʻrnatiladi.

Litsenziya borasida farq bor. Ombordagi koʻp skill Apache 2.0 litsenziyali ochiq manba. Biroq toʻrtta hujjat skilli "ochiq manba emas, manbasi mavjud" (source-available) sifatida ulashilgan. Yaʼni kodni koʻrib oʻrganishingiz mumkin, lekin oʻz mahsulotingizda erkin qayta tarqatishdan oldin litsenziya faylini oʻqishingiz kerak.

> **Bilarmidingiz?** pdf skilli bosqichma-bosqich yuklashning darslik namunasi. Anthropic muhandislik maqolasiga koʻra shakl toʻldirish koʻrsatmalari asosiy SKILL.md'dan chiqarilib, alohida forms.md fayliga koʻchirilgan. Claude bu faylni faqat haqiqatan shakl toʻldirayotganda oʻqiydi. Omborda pdf jildi ichida bugun forms.md ham, reference.md ham, scripts jildi ham turibdi.

## Hujjat yonidagi yordamchilar

Hujjat yaratish faqat fayl formati bilan tugamaydi. anthropics/skills omborida kontent tomoniga yoʻnalgan boshqa rasmiy namunalar ham bor:

- **doc-coauthoring:** Texnik shartnoma, taklif, qaror hujjati kabi tuzilgan matnlarni birga yozish uchun bosqichma-bosqich ish jarayonini taklif qiladi. Kontekstni uzatish, takroriy tuzatish va tekshirish bosqichlaridan oʻtkazadi.
- **internal-comms:** Holat hisoboti, rahbariyat yangilanishi, kompaniya byulleteni, tez-tez soʻraladigan savollar kabi ichki aloqa matnlarini kompaniya yoqtirgan shakllarda yozishga yordam beradigan manbalarni toʻplaydi. Jildda namunaviy matnlar ham bor.
- **brand-guidelines:** Anthropic'ning rasmiy brend ranglari va tipografiyasini natijaga qoʻllaydi. Asl qiymati oʻz brendingiz uchun shunga oʻxshashini qanday qurish mumkinligini koʻrsatishida.
- **theme-factory:** Slayd, hujjat, hisobot yoki HTML sahifaga qoʻllash mumkin boʻlgan 10 ta tayyor rang va shrift temasini oʻz ichiga oladi, xohlasangiz zumda yangi tema ham yaratadi.

Yordam markazi yana Notion, Figma va Atlassian kabi hamkorlarning oʻz MCP ulagichlari bilan birga ishlash uchun tayyorlagan skilllari haqida gapiradi. Ular hujjatlar yaratiladigan vositalar (masalan, Notion sahifalari) bilan ishlaganda asqotadi.

## Haqiqiy hayotda qanday ishlatiladi?

Eng samarali foydalanish tayyor hujjat skilllarini oʻzingizning kichik skillingiz bilan birlashtirish. Masalan, xlsx skilli Excel'ni qanday toʻgʻri yaratishni biladi, lekin sizning kompaniyangizning oylik savdo jadvalida qaysi ustunlar boʻlishi kerakligini bilmaydi. Buni tushuntiruvchi qisqa skill yozsangiz, ikki skill birga ishlab, ham toʻgʻri formatli, ham sizning standartingizga mos fayl chiqaradi.

Esda tutishingiz kerak boʻlgan ikki eslatma bor. Birinchisi, anthropics/skills ombori bu skilllar "namoyish va taʼlim maqsadida" ekanini va Claude'ning oʻz xatti-harakati bu yerdagi amalga oshirishlardan farq qilishi mumkinligini ochiq yozadi. Ikkinchisi, hujjat skilllari kod ishga tushirish muhitiga muhtoj. Yordam markaziga koʻra skilllar ishlashi uchun kod bajarish imkoniyati yoqilgan boʻlishi kerak.

Keyingi maqolada ekran tomoniga oʻtamiz: dizayn, front-end va veb natijalar yaratadigan skilllar.

Siz eng koʻp qaysi hujjat turini tayyorlashda vaqt yoʻqotasiz: jadvalni, taqdimotnimi yoki hisobotnimi?
