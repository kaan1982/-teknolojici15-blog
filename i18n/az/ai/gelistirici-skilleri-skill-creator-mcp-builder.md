---
title: "Developerlər üçün skill-lər: skill-creator, mcp-builder və daha çoxu"
excerpt: "Skill yazan skill, MCP serveri quran skill, test və xəta ayıklama intizamı gətirən skill paketləri. Developerlər üçün təsdiqlənmiş seçmələr."
hook: "Skill yazan bir skill var"
fact: "20 SORĞU"
factLabel: "İşə düşmə testi üçün tövsiyə olunan nümunə sayı"
category: "Süni İntellekt"
---
Proqram hazırlayan biri üçün skill-lər iki cəhətdən maraqlıdır. Birincisi, öz skill-lərini daha sürətli və ölçülə bilən şəkildə yazmağa kömək edən "istehsalçı" skill-lər var. İkincisi, agentə mühəndislik intizamı (test, plan, xəta ayıklama) qazandıran paketlər var. Bu yazıda hər ikisini, yalnız mövcud olduğunu təsdiqlədiyimiz nümunələrlə ələ alırıq.
## skill-creator: skill yazan skill
Anthropic-in rəsmi anthropics/skills deposundakı skill-creator, yeni skill yaratmaq, mövcud skill-ləri redaktə edib yaxşılaşdırmaq və performanslarını ölçmək üçün nəzərdə tutulub. Təsvirinə görə qiymətləndirmə (eval) icrası, nəticələri variasiya təhlili ilə müqayisə etmək və skill təsvirini daha yaxşı işə düşəcək şəkildə optimallaşdırmaq işlərini də öz üzərinə götürür.
İş axını xeyli insani izah olunub: nə istədiyinə qərar ver, qaralama yaz, bir neçə test mesajı hazırla, skill-li Claude-u bu mesajlarla işlət, nəticələri birlikdə qiymətləndir, yenidən yaz, təkrarla. Qovluqda qiymətləndirmə icra edən, müqayisə hesabatı yaradan və təsviri yaxşılaşdıran ayrı skriptlər, həmçinin nəticələri vizual araşdırmaq üçün bir "eval-viewer" var.
agentskills.io-nun təsvir optimallaşdırma bələdçisi də bu skill-i nümunə göstərir. Bələdçiyə görə skill-creator bu dövrü əvvəldən sona avtomatlaşdırır: test dəstini bölür, işə düşmə nisbətlərini paralel ölçür, Claude ilə təsvir yaxşılaşdırmaları təklif edir və canlı HTML hesabatı yaradır.
> **Bilirdinmi?** agentskills.io-nun tövsiyə etdiyi işə düşmə testində təxminən 20 nümunə mesaj istifadə olunur və hər biri 3 dəfə işlədilir. Yəni tək bir təsviri sınamaq 60 icra deməkdir. Həddindən artıq uyğunlaşmanın (overfitting) qarşısını almaq üçün mesajların təxminən 60 faizi yaxşılaşdırma üçün, 40 faizi isə yalnız yoxlama üçün ayrılır. Bələdçi çox vaxt beş turun kifayət etdiyini deyir.
## mcp-builder və claude-api: inteqrasiya quranlar üçün
- **mcp-builder (rəsmi):** Böyük dil modellərinin xarici xidmətlərlə yaxşı dizayn edilmiş alətlər vasitəsilə danışmasını təmin edən MCP serverləri hazırlamaq üçün bələdçi. Python (FastMCP) və ya Node/TypeScript (MCP SDK) ilə işləyir. Skill prosesi dörd mərhələyə bölür: araşdırma və planlama, tətbiq, nəzərdən keçirmə və test, qiymətləndirmə yaratma. Qovluqda dil üzrə istinad sənədləri və qiymətləndirmə skriptləri var.
- **claude-api (rəsmi):** Claude API və Anthropic SDK-ları üçün istinad skill-i. Model identifikatorları, parametrlər, axın (streaming), alət istifadəsi, keşləmə kimi mövzuları əhatə edir və bir çox proqramlaşdırma dili üçün ayrı qovluqlar ehtiva edir. Claude sənədlərinə görə bu açıq mənbə skill Claude Code ilə birlikdə gəlir.
- **webapp-testing (rəsmi):** Lokal veb tətbiqləri Playwright ilə test etməyə yönəlik alət dəsti. Ön tərəf hazırlayanlar üçün dizayn yazısında da qeyd etdiyimiz praktik köməkçidir.
## İcmadan: Superpowers ilə mühəndislik intizamı
Rəsmi depodan kənarda developerlər arasında ən çox danışılan paketlərdən biri Jesse Vincent-in MIT lisenziyalı obra/superpowers deposudur. Özünü kodlaşdırma agentləri üçün "tam proqram təminatı hazırlama metodologiyası" kimi təqdim edir. 2026-cı ilin oktyabrına olan vəziyyətlə depoda bu skill-lər var (seçmə):
| Skill | Nə vaxt işə düşür? |
|---|---|
| brainstorming | Yeni funksiyaya və ya yaradıcı işə başlamazdan əvvəl |
| writing-plans | Çoxaddımlı iş üçün koda toxunmadan plan yazarkən |
| test-driven-development | Tətbiq zamanı: əvvəl uğursuz test, sonra ən az kod |
| systematic-debugging | Xəta və ya uğursuz testlə rastlaşanda, düzəliş təklif etməzdən əvvəl |
| verification-before-completion | "Bitdi" deməzdən əvvəl yoxlama əmrlərini işlətmək üçün |
Depo README-si Claude Code ilə yanaşı Codex, Cursor, Gemini CLI və GitHub Copilot CLI kimi bir çox agent üçün quraşdırma təlimatı verir və Claude Code tərəfində Anthropic-in rəsmi əlavə bazarında yer aldığını bildirir. Bu da Agent Skills-in açıq standart olmasının praktik nəticəsidir: eyni skill fərqli alətlərdə işləyə bilir.
## Başqa platformalarda da eyni fikir
OpenAI-ın ChatGPT və Codex sənədləri də skill-ləri "açıq agent skills standartı" üzərində qurulmuş kimi təsvir edir. 2026-cı ilin oktyabrına olan vəziyyətlə sənədlərdə iki quraşdırılmış köməkçi önə çıxır: təsvir etdiyin işdən skill yaradan skill-creator (Codex-də $skill-creator ilə çağırılır) və openai/skills deposundan və ya başqa depolardan hazır skill quraşdıran skill-installer. Codex lokal skill-ləri layihə və istifadəçi səviyyəsində .agents/skills qovluqlarından oxuyur.
Bir developer üçün ən dəyərli vərdiş bu ola bilər: təkrarladığın hər uzun izahı, kod nəzərdən keçirmə yoxlama siyahını və ya yerləşdirmə addımlarını bir skill-ə çevirib layihənin deposuna qoymaq. Claude Code-da .claude/skills qovluğuna qoyulan skill-lər depo ilə birlikdə komandaya da gedir. Amma quraşdırdığın hər icma skill-inin skriptlərini oxumağı unutma, çünki bu skill-lər kompüterində sənin səlahiyyətlərinlə kod icra edə bilir.
Sənin inkişaf prosesində ən çox hansı addım "bir skill olsaydı kaş" dedirdir: test, kod nəzərdən keçirmə, yoxsa yerləşdirmə?
