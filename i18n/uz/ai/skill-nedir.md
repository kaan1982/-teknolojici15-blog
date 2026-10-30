---
title: "Skill nima? Sunʼiy intellekt agentlarining yangi \"malaka jildlari\""
excerpt: "Agent Skill SKILL.md fayli va ixtiyoriy skriptlardan iborat jild. Agent uni faqat kerak boʻlganda yuklaydi. Prompt, MCP va plagindan farqi nima?"
hook: "Agentga jild bilan yangi malaka oʻrgating"
fact: "3 QATLAM"
factLabel: "Skill mazmunining bosqichma-bosqich yuklanishi"
category: "Sunʼiy intellekt"
---

Sunʼiy intellekt yordamchilari hamma narsani ozgina biladi, lekin sizning kompaniyangizning hisobot shablonini, brendingiz ranglarini yoki biror fayl turini toʻgʻri qayta ishlash nozikliklarini bilmaydi. Buni har suhbatda uzoq tushuntirish oʻrniga bir marta paketlab, agentga "kerak boʻlganda ishlat" deya olsangiz-chi? "Skill" (malaka) aynan shu gʻoya.

## Qisqasi: bitta jild va bitta SKILL.md

Anthropic taʼrifi bilan Agent Skills Claude imkoniyatlarini kengaytiradigan modulli paketlar. Har bir skill koʻrsatmalar, meta maʼlumot va ixtiyoriy resurslarni (skriptlar, shablonlar) birga saqlaydi va Claude ularni tegishli boʻlganda oʻzi ishlatadi. Anthropic muhandislik blogi buni yanada sodda aytadi: skilllar agent muayyan ishlarda yaxshiroq boʻlish uchun ehtiyoj paytida yuklaydigan "tartibga solingan koʻrsatma, skript va resurslar jildlari".

Texnik jihatdan skill kamida ichida SKILL.md nomli fayl bor jild. Bu faylning boshida YAML formatida ikki majburiy maydon bor: name (nom) va description (tavsif). Ostida esa oddiy Markdown bilan yozilgan koʻrsatmalar turadi. Jildga xohlasangiz scripts/ (bajariladigan kod), references/ (qoʻshimcha hujjatlar) va assets/ (shablon, rasm, maʼlumot) kabi ichki jildlar qoʻshishingiz mumkin.

Anthropic bu tuzilmani yangi xodimga tayyorlanadigan moslashuv qoʻllanmasiga oʻxshatadi. Qoʻllanmani stolga qoʻyasiz, xodim kerak boʻlganda ochib qaraydi.

## Siri: hammasi birdan yuklanmaydi

Skillarni oddiy uzun promptdan ajratadigan narsa "bosqichma-bosqich yuklash" (progressive disclosure) deb ataladigan dizayn. Claude hujjatlariga koʻra mazmun uch qatlamda yuklanadi:

| Qatlam | Qachon yuklanadi? |
|---|---|
| 1. Meta maʼlumot (nom + tavsif) | Doim, ochilishda (skill boshiga taxminan 100 token) |
| 2. SKILL.md tanasi | Skill tetiklanganda (5000 token ostida tavsiya etiladi) |
| 3. Qoʻshimcha fayllar va skriptlar | Faqat kerak boʻlganda; skriptlarning faqat chiqishi kontekstga kiradi |

Shu tufayli agentga oʻnlab skill yuklashingiz mumkin, lekin hammasi kontekst oynasini toʻldirmaydi. Tetiklanguncha har bir skilldan faqat nomi va tavsifi "stolda" turadi. Hujjatdagi misolda PDF skilli shakl toʻldirish koʻrsatmalarini alohida forms.md faylida saqlaydi va Claude bu faylni faqat haqiqatan shakl toʻldirayotganda oʻqiydi.

> **Bilarmidingiz?** Anthropic Agent Skills'ni 2025-yil 16-oktyabrda eʼlon qildi va 2025-yil 18-dekabrda formatni agentskills.io manzilida ochiq standart sifatida eʼlon qildi. Shuning uchun 2026-yil oktyabr holatiga bir xil SKILL.md tuzilmasini GitHub Copilot va OpenAI Codex kabi boshqa vositalarning hujjatlarida ham koʻrasiz. Copilot hujjatlari skilllarni tekshirish uchun toʻgʻridan-toʻgʻri agentskills.io spetsifikatsiyasiga yoʻnaltiradi.

## Prompt, MCP, plagin: farqlari nima?

Bu tushunchalar tez-tez aralashtiriladi, chunki hammasi "agentni yaxshiroq qilish" bilan bogʻliq. Claude Yordam markazining farqlashini shunday umumlashtirish mumkin:

- **Prompt yoki maxsus koʻrsatmalar:** Har suhbatda yoki barcha suhbatlarda amal qiladigan umumiy yoʻnaltirishlar. Skill esa vazifaga xos va faqat tegishli boʻlganda ishga tushadi.
- **Loyihalar:** Loyiha ichidagi suhbatlarda doim yuklangan turuvchi sobit fon maʼlumoti. Skill esa kerak boʻlganda ochiladigan protsedura.
- **MCP (Model Context Protocol) ulagichlari:** Claude'ni tashqi xizmatlar va maʼlumot manbalariga ulaydi. Yaʼni "kirish"ni taʼminlaydi. Skill esa shu kirishdan qanday foydalanishni tushuntiruvchi "usul bilimi". Yordam markazi ikkalasi koʻpincha birga ishlatilishini aytadi.
- **Plaginlar:** Claude Code va Cowork tomonida plagin bir necha qismni (skilllar, ulagichlar, buyruqlar, ichki agentlar) birga tarqatish paketi. OpenAI hujjatlari ham shunga oʻxshash farq qoʻyadi: skill yozish formati, plagin esa tarqatish shakli.

Qisqasi, MCP agentga qoʻl beradi, skill oʻsha qoʻlga malaka oʻrgatadi, plagin esa bularni bir qutida yetkazadi.

## Qayerda ishlaydi?

2026-yil oktyabr holatiga Claude hujjatlariga koʻra skilllar Claude ilovalarida (claude.ai), Claude Code'da va kod ishga tushirish vositasi bilan birga Claude API'da ishlatilishi mumkin. Yordam markazi skilllar Free, Pro, Max, Team va Enterprise rejalarida taklif etilishini va kod bajarish imkoniyati yoqilgan boʻlishini talab qilishini bildiradi.

Muhim tafsilot: maxsus skilllar yuzalar oʻrtasida sinxronlanmaydi. claude.ai'ga yuklagan skillingiz faqat sizning hisobingizga xos. API'ga yuklangan skill ish maydonining hammasi bilan ulashiladi. Claude Code'da esa shaxsiy (~/.claude/skills/) yoki loyiha jildida (.claude/skills/) saqlanadi.

Xavfsizlik jihati ham bor. Skilllar kod ishga tushira olgani uchun hujjatlar ularni "dastur oʻrnatgandek" qabul qilishni va faqat ishonchli manbalardan foydalanishni tavsiya qiladi. Buni turkumning oxirgi maqolasida alohida koʻrib chiqamiz.

Bu boʻlimning keyingi maqolalarida oʻz skillingizni bosqichma-bosqich yozishni va haqiqatan mavjud, ishga yaraydigan skillarni turkumma-turkum koʻrib chiqamiz.

Siz sunʼiy intellektga har kuni qayta-qayta tushuntiradigan, "qani edi buni bir marta oʻrgatsam" deydigan ish qaysi?
