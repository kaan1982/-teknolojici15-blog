---
title: "Skill nədir? Süni intellekt agentlərinin yeni 'bacarıq qovluqları'"
excerpt: "Agent Skill, SKILL.md faylı və istəyə bağlı skriptlərdən ibarət qovluqdur. Agent onu yalnız lazım olanda yükləyir. Promptdan, MCP-dən və əlavədən fərqi nədir?"
hook: "Agentə bir qovluqla yeni bacarıq öyrət"
fact: "3 QAT"
factLabel: "Skill məzmununun mərhələli yüklənməsi"
category: "Süni İntellekt"
---
Süni intellekt köməkçiləri hər şeyi bir az bilir, amma sənin şirkətinin hesabat şablonunu, brendinin rənglərini və ya bir fayl növünü düzgün emal etməyin incəliklərini bilmir. Bunu hər söhbətdə uzun-uzadı izah etmək əvəzinə, bir dəfə paketləyib agentə "lazım olanda istifadə et" deyə bilsəydin? Məhz "skill" (bacarıq) bu fikirdir.
## Qısaca: bir qovluq və bir SKILL.md
Anthropic-in tərifinə görə Agent Skills, Claude-un imkanlarını genişləndirən modul paketlərdir. Hər skill təlimatları, meta məlumatı və istəyə bağlı resursları (skriptlər, şablonlar) bir yerdə saxlayır və Claude onlardan uyğun olduqda öz-özünə istifadə edir. Anthropic-in mühəndislik bloqu bunu daha da sadə deyir: skill-lər, agentin konkret işlərdə daha yaxşı olmaq üçün ehtiyac anında yüklədiyi "nizamlanmış təlimat, skript və resurs qovluqları"dır.
Texniki baxımdan skill, ən azı içində SKILL.md adlı fayl olan bir qovluqdur. Bu faylın əvvəlində YAML formatında iki məcburi sahə var: name (ad) və description (təsvir). Altında isə sadə Markdown ilə yazılmış təlimatlar yer alır. Qovluğa istəsən scripts/ (icra olunan kod), references/ (əlavə sənədlər) və assets/ (şablon, təsvir, məlumat) kimi alt qovluqlar əlavə edə bilərsən.
Anthropic bu quruluşu yeni işçiyə hazırlanan işə uyğunlaşma bələdçisinə bənzədir. Bələdçini masaya qoyursan, işçi ehtiyacı olanda açıb baxır.
## Sirr: hər şey bir anda yüklənmir
Skill-ləri adi uzun promptdan fərqləndirən şey "mərhələli yükləmə" (progressive disclosure) adlanan dizayndır. Claude sənədlərinə görə məzmun üç qatda yüklənir:
| Qat | Nə vaxt yüklənir? |
|---|---|
| 1. Meta məlumat (ad + təsvir) | Həmişə, açılışda (hər skill üçün təxminən 100 token) |
| 2. SKILL.md gövdəsi | Skill işə düşdükdə (5.000 token altı tövsiyə olunur) |
| 3. Əlavə fayllar və skriptlər | Yalnız lazım olduqda; skriptlərin yalnız çıxışı kontekstə girir |
Bu sayədə agentə onlarla skill yükləyə bilərsən, amma hamısı kontekst pəncərəsini doldurmur. İşə düşənə qədər hər skill-dən yalnız adı və təsviri "masada" durur. Sənəddəki nümunədə PDF skill-i form doldurma təlimatlarını ayrıca forms.md faylında saxlayır və Claude bu faylı yalnız həqiqətən form doldurarkən oxuyur.
> **Bilirdinmi?** Anthropic, Agent Skills-i 2025-ci il oktyabrın 16-da elan etdi və dekabrın 18-də formatı agentskills.io ünvanında açıq standart kimi yayımladı. Buna görə 2026-cı ilin oktyabrına olan vəziyyətlə eyni SKILL.md quruluşunu GitHub Copilot və OpenAI Codex kimi digər alətlərin sənədlərində də görürsən. Copilot-un sənədləri skill-ləri yoxlamaq üçün birbaşa agentskills.io spesifikasiyasına yönləndirir.
## Prompt, MCP, əlavə: fərqləri nədir?
Bu anlayışlar tez-tez qarışdırılır, çünki hamısı "agenti daha yaxşı etmək" ilə bağlıdır. Claude Yardım Mərkəzinin fərqləndirməsi belə ümumiləşdirilə bilər:
- **Prompt və ya xüsusi təlimatlar:** Hər söhbətdə və ya bütün söhbətlərdə keçərli ümumi istiqamətləndirmələr. Skill isə tapşırığa xasdır və yalnız uyğun olduqda işə düşür.
- **Layihələr:** Layihə daxilindəki söhbətlərdə həmişə yüklü qalan sabit fon məlumatı. Skill isə lazım olanda açılan prosedurdur.
- **MCP (Model Context Protocol) bağlayıcıları:** Claude-u xarici xidmətlərə və məlumat mənbələrinə bağlayır. Yəni "çıxış" təmin edir. Skill isə həmin çıxışdan necə istifadə edəcəyini izah edən "metod biliyi"dir. Yardım mərkəzi ikisinin tez-tez birlikdə işlədildiyini bildirir.
- **Əlavələr (plugin):** Claude Code və Cowork tərəfində əlavə, bir neçə hissəni (skill-lər, bağlayıcılar, əmrlər, alt agentlər) birlikdə paylamaq üçün paketdir. OpenAI-ın sənədləri də oxşar fərq qoyur: skill yazım formatıdır, əlavə isə paylama formasıdır.
Qısası, MCP agentə əl verir, skill o ələ bacarıq öyrədir, əlavə isə bunları bir qutuda təslim edir.
## Harada işləyir?
2026-cı ilin oktyabrına olan vəziyyətlə Claude sənədlərinə görə skill-lər Claude tətbiqlərində (claude.ai), Claude Code-da və kod icra aləti ilə birlikdə Claude API-də istifadə oluna bilir. Yardım mərkəzi skill-lərin Free, Pro, Max, Team və Enterprise planlarında təqdim olunduğunu və kod icrası funksiyasının açıq olmasını tələb etdiyini bildirir.
Önəmli bir detal: xüsusi skill-lər səthlər arasında sinxronlaşmır. claude.ai-ya yüklədiyin skill yalnız sənin hesabına məxsusdur. API-yə yüklənən skill iş sahəsinin hamısı ilə paylaşılır. Claude Code-da isə şəxsi (~/.claude/skills/) və ya layihə qovluğunda (.claude/skills/) saxlanır.
Bir də təhlükəsizlik tərəfi var. Skill-lər kod icra edə bildiyi üçün sənədlər onlara "proqram quraşdırmaq kimi" yanaşmağı və yalnız etibarlı mənbələrdən istifadə etməyi tövsiyə edir. Bunu seriyanın son yazısında ayrıca ələ alırıq.
Bu bölmənin sonrakı yazılarında öz skill-ini addım-addım yazmağı və həqiqətən mövcud olan, işə yarayan skill-ləri kateqoriya-kateqoriya araşdıracağıq.
Sən hər gün süni intellektə təkrar-təkrar izah etdiyin, "kaş bunu bir dəfə öyrədəydim" dediyin iş hansıdır?
