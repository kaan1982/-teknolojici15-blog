---
title: "Öz skill-ini yaz: SKILL.md ilə addım-addım ilk bacarıq"
excerpt: "Bir qovluq, bir SKILL.md və yaxşı yazılmış təsvir. Öz Agent Skill-ini yazmağın addımları, description sahəsinin önəmi və test üsulu."
hook: "Skill-i təsviri işə salır"
fact: "1.024"
factLabel: "description sahəsi üçün maksimum simvol"
category: "Süni İntellekt"
---
Skill yazmaq üçün proqramçı olmaq lazım deyil. Ən sadə halında bir qovluq və içində tək mətn faylı kifayətdir. Amma yaxşı işləyən skill ilə heç işə düşməyən skill arasındakı fərq çox vaxt tək cümlədə gizlidir: təsvir. Bu yazıda sıfırdan kiçik, amma real bir skill yazırıq.
## Addım 1: Qovluğu və SKILL.md-ni yarat
Agent Skills spesifikasiyasına görə skill, ən azı bir SKILL.md faylı olan qovluqdur. Faylın ən əvvəlində YAML ön məlumatı (frontmatter) yer alır və iki sahə məcburidir:
- **name:** Ən çox 64 simvol. Yalnız kiçik hərf, rəqəm və defis. Defislə başlayıb bitə bilməz, ardıcıl iki defis ola bilməz və qovluğun adı ilə eyni olmalıdır. Claude sənədləri ayrıca "anthropic" və "claude" sözlərinin adda işlədilə bilməyəcəyini bildirir.
- **description:** Boş ola bilməz, ən çox 1.024 simvol. Skill-in nə etdiyini və nə vaxt istifadə olunacağını izah etməlidir.
İstəyə bağlı sahələr də var (license, compatibility, metadata və eksperimental allowed-tools), amma əksər skill-lər üçün lazım deyil.
## Addım 2: Təsviri diqqətlə yaz
Təsvir niyə bu qədər önəmlidir? Çünki agent açılışda hər skill-in yalnız adını və təsvirini oxuyur. agentskills.io-nun ifadəsi ilə işə düşmənin "bütün yükü" təsvirin çiynindədir. Təsvir işin nə vaxt yarayacağını izah etmirsə, agent o skill-ə əl uzatmır.
Mənbələrin tövsiyələri belə ümumiləşdirilə bilər:
- Həm **nə etdiyini**, həm də **nə vaxt istifadə olunacağını** yaz.
- Claude sənədləri təsvirin sistem promptuna əlavə olunduğu üçün **üçüncü şəxslə** yazılmasını tövsiyə edir ("Excel fayllarını emal edir", "Sənə kömək edə bilərəm" yox).
- agentskills.io, istifadəçinin həmin sahəni adı ilə çəkmədiyi halları da açıq sadalamağı tövsiyə edir.
- Qısa saxla: bir neçə cümlə, ən çox qısa bir abzas. Claude Code siyahıda təsviri 1.536 simvolda kəsir, buna görə ən önəmli istifadə halı əvvəldə olmalıdır.
## Addım 3: Gövdəni qısa, skripti ağıllı saxla
Nümunə olaraq bu bloqun öz yazı qaydasına uyğun bir skill düşünək: mətndə uzun tire (em dash) və orta tire (en dash) qalmasın. Qovluq quruluşu belə olsun:
```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```
SKILL.md faylı isə bu qədərdir:
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
Claude sənədləri kontekst pəncərəsini "ortaq resurs" kimi görür və yalnız modelin onsuz da bilmədiyi məlumatı əlavə etməyi tövsiyə edir. Gövdə 500 sətirdən az qalmalıdır. Uzun istinad mətnləri ayrı fayllara daşınmalı və bu fayllara SKILL.md-dən tək səviyyədə keçid verilməlidir.
Skriptlər üçün qayda da aydındır: "həll et, topu atma". Yəni skript xəta hallarını özü idarə etməlidir, "partlasın, Claude bir yolunu tapar" məntiqi ilə yazılmamalıdır. Skript işə düşəndə kontekstə kodun özü yox, yalnız çıxışı girir. Bu da təkrarlanan və səhvə dözməyən işlər üçün skripti təlimatdan daha etibarlı edir.
> **Bilirdinmi?** Claude Code-da köhnə "xüsusi slash əmrləri" skill-lərlə birləşdi. .claude/commands/deploy.md faylı ilə .claude/skills/deploy/SKILL.md eyni /deploy əmrini yaradır. Bir skill-in avtomatik işə düşməsini istəmirsənsə, frontmatter-ə disable-model-invocation: true əlavə edib onu yalnız əllə çağıra bilərsən.
## Addım 4: Test et, sonra yenə test et
Claude-un ən yaxşı təcrübələr bələdçisi, uzun sənəd yazmazdan əvvəl qiymətləndirmə ssenariləri hazırlamağı tövsiyə edir və yayımdan əvvəlki yoxlama siyahısında ən azı üç qiymətləndirmə ilə Haiku, Sonnet və Opus modellərində ayrı-ayrılıqda test yer alır. Səbəb sadədir: Opus-da qüsursuz işləyən təlimat Haiku üçün daha çox detal tələb edə bilər.
İşə düşməni test etmək üçün agentskills.io-nun tövsiyəsi konkretdir: təxminən 20 nümunə istifadəçi mesajı hazırla. Bunların 8-dən 10-na qədəri skill-i işə salmalı, 8-dən 10-na qədəri işə salmamalıdır. Ən dəyərli mənfi nümunələr "az qala yanlış düşən"lərdir, yəni eyni sözləri paylaşan, amma başqa iş istəyən mesajlar. Model davranışı hər dəfə eyni olmadığı üçün hər mesajı bir neçə dəfə (başlanğıc üçün 3) işlədib işə düşmə nisbətinə baxmaq tövsiyə olunur.
| Pis təsvir | Yaxşı təsvir |
|---|---|
| "PDF-lərlə kömək edir." | Nə etdiyini və nə vaxt istifadə olunacağını deyir |
| Yalnız texniki detal | İstifadəçinin niyyətini izah edir |
| Hər şeyi əhatə edir | Nəyi etmədiyini də bildirir |
Quraşdırma da sadədir: Claude Code-da qovluğu ~/.claude/skills/ altına (şəxsi) və ya layihənin .claude/skills/ qovluğuna qoymağın kifayətdir. Claude Code bu qovluqları izləyir və dəyişiklikləri yenidən başlatma tələb etmədən eyni sessiyada hiss edir. claude.ai-da isə skill-i zip kimi ayarlardan yükləyə bilirsən.
Sənin ilk skill-in hansı təkrarlanan işini avtomatlaşdırardı?
