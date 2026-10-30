---
title: "Oʻz skillingizni yozing: SKILL.md bilan bosqichma-bosqich birinchi malaka"
excerpt: "Bitta jild, bitta SKILL.md va yaxshi yozilgan tavsif. Oʻz Agent Skill'ingizni yozish bosqichlari, description maydonining ahamiyati va sinash usuli."
hook: "Skillni tavsifi tetiklaydi"
fact: "1024"
factLabel: "description maydoni uchun eng koʻp belgi"
category: "Sunʼiy intellekt"
---

Skill yozish uchun dasturchi boʻlishingiz shart emas. Eng oddiy shaklida bitta jild va ichida bitta matn fayli yetarli. Lekin yaxshi ishlaydigan skill bilan hech tetiklanmaydigan skill oʻrtasidagi farq koʻpincha bitta gapda yashiringan: tavsif. Bu maqolada noldan kichik, lekin haqiqiy skill yozamiz.

## 1-qadam: Jild va SKILL.md'ni yarating

Agent Skills spetsifikatsiyasiga koʻra skill kamida bitta SKILL.md fayli bor jild. Faylning eng boshida YAML maʼlumoti (frontmatter) turadi va ikki maydon majburiy:

- **name:** Eng koʻp 64 belgi. Faqat kichik harf, raqam va chiziqcha. Chiziqcha bilan boshlanib tugay olmaydi, ketma-ket ikki chiziqcha boʻlishi mumkin emas va jild nomi bilan bir xil boʻlishi kerak. Claude hujjatlari yana "anthropic" va "claude" soʻzlari nomda ishlatilmasligini bildiradi.
- **description:** Boʻsh boʻlishi mumkin emas, eng koʻp 1024 belgi. Skill nima qilishini va qachon ishlatilishini tushuntirishi kerak.

Ixtiyoriy maydonlar ham bor (license, compatibility, metadata va eksperimental allowed-tools), lekin koʻp skill uchun kerak emas.

## 2-qadam: Tavsifni ehtiyotkorlik bilan yozing

Tavsif nega bunchalik muhim? Chunki agent ochilishda har bir skillning faqat nomi va tavsifini oʻqiydi. agentskills.io ifodasi bilan tetiklanishning "butun yuki" tavsif zimmasida. Tavsif ish qachon asqotishini tushuntirmasa, agent oʻsha skillga qoʻl uzatmaydi.

Manbalarning tavsiyalarini shunday umumlashtirish mumkin:

- Ham **nima qilishini**, ham **qachon ishlatilishini** yozing.
- Claude hujjatlari tavsif tizim soʻrovnomasiga qoʻshilgani uchun **uchinchi shaxsda** yozilishini tavsiya qiladi ("Excel fayllarini qayta ishlaydi", "Sizga yordam bera olaman" emas).
- agentskills.io foydalanuvchi sohani nomi bilan atamagan holatlarni ham ochiq sanab oʻtishni tavsiya qiladi.
- Qisqa qiling: bir necha gap, eng koʻpi qisqa paragraf. Claude Code roʻyxatda tavsifni 1536 belgida kesadi, shuning uchun eng muhim foydalanish holati boshida boʻlishi kerak.

## 3-qadam: Tanani qisqa, skriptni aqlli saqlang

Namuna sifatida shu blogning oʻz yozuv qoidasiga mos skillni oʻylab koʻraylik: matnda uzun tire (em dash) va oʻrta tire (en dash) qolmasin. Jild tuzilmasi shunday boʻlsin:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

SKILL.md fayli esa shuncha:

```markdown
---
name: tire-denetimi
description: Türkçe blog yazılarında uzun tire (U+2014) ve orta tire (U+2013) kullanımını bulur ve düzeltme önerir. Kullanıcı bir Markdown yazısını yayına hazırlarken, "tireleri kontrol et", "yazım kurallarına uyuyor mu" dediğinde ya da adını anmasa da yayın öncesi son kontrol istediğinde kullanılır.
---

# Tire denetimi

1. `python scripts/tire_bul.py <dosya.md>` komutunu çalıştır.
2. Çıktıdaki her satır için tireyi nokta, virgül, iki nokta veya parantezle değiştirmeyi öner.
3. Anlamı değiştirme. Emin olmadığın satırları kullanıcıya sor.
4. Sonunda kaç satır düzelttiğini tek cümleyle bildir.
```

Claude hujjatlari kontekst oynasini "umumiy resurs" deb biladi va faqat model allaqachon bilmaydigan maʼlumotni qoʻshishni tavsiya qiladi. Tana 500 satrdan kam boʻlishi kerak. Uzun maʼlumotnoma matnlari alohida fayllarga koʻchirilib, bu fayllarga SKILL.md'dan bir pogʻonali havola berilishi kerak.

Skriptlar uchun qoida ham aniq: "yeching, topni tashlab yubormang". Yaʼni skript xato holatlarini oʻzi hal qilishi kerak, "yorilsin, Claude yoʻlini topar" mantigʻida yozilmasligi kerak. Skript ishga tushganda kontekstga kodning oʻzi emas, faqat chiqishi kiradi. Bu takrorlanadigan va xatoni kechirmaydigan ishlar uchun skriptni koʻrsatmadan ishonchliroq qiladi.

> **Bilarmidingiz?** Claude Code'da eski "maxsus qiya chiziqli buyruqlar" skilllar bilan birlashdi. .claude/commands/deploy.md fayli bilan .claude/skills/deploy/SKILL.md bir xil /deploy buyrugʻini hosil qiladi. Skillning avtomatik tetiklanishini istamasangiz, frontmatter'ga disable-model-invocation: true qoʻshib, uni faqat qoʻlda chaqirishingiz mumkin.

## 4-qadam: Sinang, keyin yana sinang

Claude'ning eng yaxshi amaliyotlar qoʻllanmasi uzun hujjat yozishdan oldin baholash stsenariylarini tayyorlashni tavsiya qiladi va eʼlon oldi nazorat roʻyxatida kamida uchta baholash hamda Haiku, Sonnet va Opus modellarida alohida sinov bor. Sabab oddiy: Opus'da benuqson ishlagan koʻrsatma Haiku uchun koʻproq tafsilot talab qilishi mumkin.

Tetiklanishni sinash uchun agentskills.io tavsiyasi aniq: taxminan 20 ta namuna foydalanuvchi xabarini tayyorlang. Ularning 8 tadan 10 tagacha skillni tetiklashi, 8 tadan 10 tagacha tetiklamasligi kerak. Eng qimmatli salbiy namunalar "sal oʻtkazib yuboradi", yaʼni bir xil soʻzlarni ishlatadigan, lekin boshqa ish soʻraydigan xabarlar. Model xatti-harakati har safar bir xil boʻlmagani uchun har bir xabarni bir necha marta (boshlanishiga 3) ishga tushirib, tetiklanish nisbatiga qarash tavsiya etiladi.

| Yomon tavsif | Yaxshi tavsif |
|---|---|
| "PDF bilan yordam beradi." | Nima qilishini va qachon ishlatilishini aytadi |
| Faqat texnik tafsilot | Foydalanuvchi niyatini tushuntiradi |
| Hamma narsani qamrab oladi | Nimani qilmasligini ham bildiradi |

Oʻrnatish ham oddiy: Claude Code'da jildni ~/.claude/skills/ ostiga (shaxsiy) yoki loyihaning .claude/skills/ jildiga qoʻysangiz yetarli. Claude Code bu jildlarni kuzatadi va oʻzgarishlarni qayta ishga tushirishsiz, xuddi shu seansda sezadi. claude.ai'da esa skillni zip sifatida sozlamalardan yuklash mumkin.

Sizning birinchi skillingiz qaysi takrorlanadigan ishingizni avtomatlashtirardi?
