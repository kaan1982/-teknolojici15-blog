---
title: "Dasturchilar uchun skilllar: skill-creator, mcp-builder va boshqalar"
excerpt: "Skill yozadigan skill, MCP server quradigan skill, test va xatolarni topish intizomini olib keladigan skill paketlari. Dasturchilar uchun tasdiqlangan tanlovlar."
hook: "Skill yozadigan skill bor"
fact: "20 SOʻROV"
factLabel: "Tetiklanish testi uchun tavsiya etilgan namuna"
category: "Sunʼiy intellekt"
---

Dasturiy taʼminot ishlab chiqadigan kishi uchun skilllar ikki jihatdan qiziq. Birinchisi, oʻz skillingizni tezroq va oʻlchanadigan tarzda yozishga yordam beradigan "ishlab chiqaruvchi" skilllar bor. Ikkinchisi, agentga muhandislik intizomini (test, reja, xatolarni topish) beradigan paketlar bor. Bu maqolada ikkalasini ham faqat mavjudligini tasdiqlagan namunalar bilan koʻrib chiqamiz.

## skill-creator: skill yozadigan skill

Anthropic'ning rasmiy anthropics/skills omboridagi skill-creator yangi skill yaratish, mavjud skilllarni tahrirlab yaxshilash va ularning unumdorligini oʻlchash uchun moʻljallangan. Tavsifiga koʻra baholash (eval) ishga tushirish, natijalarni dispersiya tahlili bilan taqqoslash va skill tavsifini yaxshiroq tetiklanadigan qilib optimallashtirish ishlarini ham zimmasiga oladi.

Ish jarayoni ancha insoniy bayon qilingan: nima istashingizga qaror qiling, qoralama yozing, bir necha test xabarini tayyorlang, skillli Claude'ni shu xabarlar bilan ishga tushiring, natijalarni birga baholang, qayta yozing, takrorlang. Jildda baholashni ishga tushiradigan, taqqoslash hisobotini yaratadigan va tavsifni yaxshilaydigan alohida skriptlar, shuningdek natijalarni vizual koʻrib chiqish uchun "eval-viewer" bor.

agentskills.io'ning tavsifni optimallashtirish qoʻllanmasi ham bu skillni namuna sifatida koʻrsatadi. Qoʻllanmaga koʻra skill-creator bu siklni boshidan oxirigacha avtomatlashtiradi: test toʻplamini boʻladi, tetiklanish nisbatlarini parallel oʻlchaydi, Claude bilan tavsif yaxshilanishlarini taklif qiladi va jonli HTML hisobot yaratadi.

> **Bilarmidingiz?** agentskills.io tavsiya etgan tetiklanish testida taxminan 20 ta namuna xabar ishlatiladi va har biri 3 martadan ishga tushiriladi. Yaʼni bitta tavsifni sinash 60 ta ishga tushirish demak. Haddan tashqari moslashishning (overfitting) oldini olish uchun xabarlarning taxminan 60 foizi yaxshilash uchun, 40 foizi esa faqat tekshirish uchun ajratiladi. Qoʻllanma koʻp hollarda besh davra yetarli ekanini aytadi.

## mcp-builder va claude-api: integratsiya quruvchilar uchun

- **mcp-builder (rasmiy):** Katta til modellarining tashqi xizmatlar bilan yaxshi loyihalangan vositalar orqali gaplashishini taʼminlaydigan MCP serverlarini ishlab chiqish uchun qoʻllanma. Python (FastMCP) yoki Node/TypeScript (MCP SDK) bilan ishlaydi. Skill jarayonni toʻrt bosqichga boʻladi: tadqiqot va rejalashtirish, amalga oshirish, koʻrib chiqish va test, baholash yaratish. Jildda til boʻyicha maʼlumotnoma hujjatlar va baholash skriptlari bor.
- **claude-api (rasmiy):** Claude API va Anthropic SDK'lar uchun maʼlumotnoma skilli. Model identifikatorlari, parametrlar, oqim (streaming), vositadan foydalanish, keshlash kabi mavzularni qamrab oladi va koʻp dasturlash tillari uchun alohida jildlarni oʻz ichiga oladi. Claude hujjatlariga koʻra bu ochiq manbali skill Claude Code bilan birga keladi.
- **webapp-testing (rasmiy):** Mahalliy veb-ilovalarni Playwright bilan sinashga moʻljallangan vositalar toʻplami. Front-end ishlab chiquvchilar uchun dizayn maqolasida ham aytgan amaliy yordamchi.

## Jamoadan: Superpowers bilan muhandislik intizomi

Rasmiy ombordan tashqari ishlab chiquvchilar orasida eng koʻp gapiriladigan paketlardan biri Jesse Vincent'ning MIT litsenziyali obra/superpowers ombori. U oʻzini kodlash agentlari uchun "dasturiy taʼminot ishlab chiqishning toʻliq metodologiyasi" deb taʼriflaydi. 2026-yil oktyabr holatiga koʻra omborda quyidagi skilllar bor (tanlov):

| Skill | Qachon ishga tushadi? |
|---|---|
| brainstorming | Yangi imkoniyat yoki ijodiy ishni boshlashdan oldin |
| writing-plans | Koʻp bosqichli ish uchun kodga tegmasdan oldin reja yozayotganda |
| test-driven-development | Amalga oshirish paytida: avval muvaffaqiyatsiz test, keyin eng kam kod |
| systematic-debugging | Xato yoki muvaffaqiyatsiz testga duch kelganda, tuzatish taklif qilishdan oldin |
| verification-before-completion | "Tayyor" demasdan oldin tekshiruv buyruqlarini ishga tushirish uchun |

Ombor README'si Claude Code bilan birga Codex, Cursor, Gemini CLI va GitHub Copilot CLI kabi koʻp agent uchun oʻrnatish koʻrsatmasini beradi va Claude Code tomonida Anthropic'ning rasmiy plagin bozorida ekanini bildiradi. Bu Agent Skills ochiq standart ekanining amaliy natijasi: bir xil skill turli vositalarda ishlay oladi.

## Boshqa platformalarda ham xuddi shu gʻoya

OpenAI'ning ChatGPT va Codex hujjatlari ham skilllarni "ochiq agent skills standarti" asosida qurilgan deb taʼriflaydi. 2026-yil oktyabr holatiga koʻra hujjatlarda ikkita ichki yordamchi oldinga chiqadi: tasvirlagan ishingizdan skill yaratadigan skill-creator (Codex'da $skill-creator bilan chaqiriladi) va openai/skills ombori yoki boshqa omborlardan tayyor skill oʻrnatadigan skill-installer. Codex mahalliy skilllarni loyiha va foydalanuvchi darajasida .agents/skills jildlaridan oʻqiydi.

Dasturchi uchun eng qimmatli odat shu boʻlishi mumkin: takrorlaydigan har bir uzun tushuntirishni, kod koʻrib chiqish nazorat roʻyxatingizni yoki joylashtirish qadamlarini skillga aylantirib, loyiha omboriga qoʻyish. Claude Code'da .claude/skills jildiga qoʻyilgan skilllar ombor bilan birga jamoaga ham boradi. Lekin oʻrnatgan har bir jamoa skillining skriptlarini oʻqishni unutmang, chunki bu skilllar kompyuteringizda sizning vakolatlaringiz bilan kod ishga tushirishi mumkin.

Sizning ishlab chiqish jarayoningizda eng koʻp qaysi qadam "qani edi skill boʻlsa" dedirtiradi: testmi, kod koʻrib chiqishmi, joylashtirishmi?
