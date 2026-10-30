---
title: "Skill təhlükəsizliyi: quraşdırmazdan əvvəl oxumalı olduğun hər şey"
excerpt: "Skill-lər kod icra edə, xarici mənbələrdən təlimat çəkə bilər. Etibarlı mənbə, SKILL.md və skript yoxlaması, ən az səlahiyyət və gizli açarlar üçün bələdçi."
hook: "Skill quraşdırmaq, proqram quraşdırmaqdır"
fact: "13,4%"
factLabel: "Kritik boşluğu olan skill nisbəti (Snyk, 2026)"
category: "Süni İntellekt"
---
Skill-ləri bu qədər güclü edən şey eyni zamanda onları riskli edən şeydir: skill yalnız mətn deyil, icra oluna bilən kod da daşıya bilir. Agent həmin skill-i yüklədikdə içindəki təlimatları öz təlimatı kimi izləyir və skriptlərini icra edə bilir. Buna görə Claude sənədlərinin tövsiyəsi tək cümlədə ümumiləşdirilə bilər: skill quraşdırmağa proqram quraşdırmaq kimi yanaş.
## Rəsmi mənbələr nə deyir?
Claude sənədlərindəki təhlükəsizlik bölməsi xeyli birbaşadır. Skill-lərdən yalnız etibarlı mənbələrdən, yəni özünün yazdıqlarından və ya Anthropic-dən aldıqlarından istifadə etməyi tövsiyə edir. Naməlum mənbədən skill istifadə etməyə məcbursansa "son dərəcə diqqətli" olmağı və istifadədən əvvəl əvvəldən sona yoxlamağı tələb edir.
Anthropic-in mühəndislik yazısı da eyni xətdədir: az etibarlı mənbələrdən gələn skill-lərdə paketlənmiş faylları, xüsusilə kod asılılıqlarını və skriptləri yoxlamağı, həmçinin xarici şəbəkələrə qoşulmağı bildirən təlimatları nəzərdən keçirməyi tövsiyə edir. Sənədlər bir riski xüsusi vurğulayır: xarici ünvanlardan məlumat çəkən skill-lər təhlükəlidir, çünki çəkilən məzmun pis niyyətli təlimatlar daşıya bilər.
## Sahədə nələr baş verir?
Bu xəbərdarlıqlar nəzəri deyil. Təhlükəsizlik şirkəti Snyk, 5 fevral 2026-da yayımladığı "ToxicSkills" araşdırmasında ClawHub və skills.sh mənşəli 3.984 skill-i skan etdi. Nəticələr:
| Tapıntı | Say |
|---|---|
| Skan edilən skill | 3.984 |
| Ən azı bir təhlükəsizlik problemi olan | 1.467 (36,82 faiz) |
| Ən azı bir kritik problem daşıyan | 534 (13,4 faiz) |
| Təsdiqlənmiş zərərli yük | 76 |
Hesabata görə skills.sh məlumatı yalnız həmin saytın seçilmiş ilk 100 skill-ini əhatə edir, tam bazar rəqəmləri isə ClawHub üçündür. Görülən hücum növləri arasında istifadəçini etibarsız proqram endirib işlətməyə yönəldən quraşdırma təlimatları, kimlik məlumatlarını hücumçuya göndərən gizlədilmiş (Base64 və ya Unicode ilə maskalanmış) əmrlər, təhlükəsizlik yoxlamalarını söndürmə və arxa qapı qurma cəhdləri var. Təsdiqlənmiş zərərli skill-lərin 91 faizində prompt injection (təlimat inyeksiyası) istifadə olunub.
> **Bilirdinmi?** Claude Yardım Mərkəzinə görə Enterprise təşkilatlar, yüklənən skill-ləri və əlavələri zərərli məzmun baxımından yoxlayan skill skanını aça bilir. Amma bu bir təhlükəsizlik toru, oxumanın yerini tutmur. Bir skill-in nə etdiyini ən yaxşı, quraşdırmazdan əvvəl SKILL.md-ni və skriptlərini özün açıb oxuyaraq anlayırsan.
## Quraşdırmadan əvvəl yoxlama siyahısı
Sənədlərdəki tövsiyələrdən və sahədəki tapıntılardan çıxardığımız praktik siyahı:
1. **Mənbəni doğrula.** Depo kimindir? Rəsmi bir şirkət və ya tanınmış developer, yoxsa adı məlum paketə çox bənzəyən (typosquatting) kopyadır?
2. **SKILL.md-ni əvvəldən sona oxu.** "Əvvəl bunu endir və işlət", "təhlükəsizlik ayarını söndür", "bu ünvana göndər" kimi ifadələr həyəcan siqnalıdır.
3. **scripts/ qovluğunu araşdır.** Oxuya bilmədiyin, gizlədilmiş və ya Base64 ilə kodlanmış sətirlər varsa, quraşdırma.
4. **Xarici bağlantıları yoxla.** Skill bir veb ünvanından təlimat və ya məlumat çəkirsə, həmin məzmunun hər an dəyişə biləcəyini unutma.
5. **Ehtiyacın olanı quraşdır.** "Hamısını quraşdır" əvəzinə tək-tək skill seçmək həm konteksti, həm hücum səthini kiçildir.
## Ən az səlahiyyət və gizli açarlar
Skill-in harada işlədiyi də önəmlidir. Claude sənədlərinə görə Claude API mühitində skill-lərin şəbəkə çıxışı yoxdur və icra anında paket quraşdıra bilmirlər. claude.ai-da şəbəkə çıxışı istifadəçi və idarəçi ayarlarına görə tam, qismən və ya bağlı ola bilər. Claude Code-da isə skill-lər kompüterindəki istənilən proqram qədər şəbəkə çıxışına malikdir. Yəni lokal agentdə quraşdırdığın skill sənin səlahiyyətlərinlə işləyir.
Buna görə ən az səlahiyyət prinsipi kritikdir. Claude Code-da bir skill-in frontmatter-indəki allowed-tools sahəsi, həmin skill çağırıldıqda müəyyən alətlərin icazə soruşmadan istifadə olunmasını təmin edir. Sənədlərə görə bu icazə növbəti mesajında sıfırlanır. Yenə də başqasının yazdığı bir skill-də geniş icazələr görsən, bunu şüurlu şəkildə təsdiqləmədən quraşdırmamaq yaxşı vərdişdir.
Gizli açarlar üçün qayda sadədir: API açarlarını, parolları və giriş tokenlərini heç vaxt SKILL.md-yə və ya skill qovluğuna yazma. Skill-i paylaşdıqda və ya depoya göndərdikdə həmin qovluqdakı hər şey də gedir. Açarları mühit dəyişənlərində və ya istifadə etdiyin alətin təhlükəsiz kimlik məlumatı saxlama metodunda saxla və skill-ə yalnız onlara necə çatacağını izah et.
2026-cı ilin oktyabrına olan vəziyyətlə skill ekosistemi çox sürətlə böyüyür və bu böyümə tətbiq mağazalarının ilk illərindəki təhlükəsizlik problemlərini xatırladır. Yaxşı xəbər budur: skill oxumaq, bir tətbiqin mənbə kodunu oxumaqdan çox daha asandır, çünki böyük hissəsi sadə mətndir.
Sən bir skill-i quraşdırmazdan əvvəl içini açıb oxuyursan, yoxsa ulduz sayına və endirmə rəqəminə güvənirsən?
