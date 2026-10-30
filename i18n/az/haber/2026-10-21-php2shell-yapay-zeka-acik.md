---
title: "Süni intellekt vebsaytların 70 faizinin əsaslandığı PHP-də kritik boşluq tapdı"
excerpt: "PHP2Shell adlı iki boşluq giriş etmədən serverdə kod işlətməyə imkan verir. Kəşfdə GPT-5.6 Sol və Gemini 4 Argon kimi modellərdən istifadə olunub."
hook: "PHP-dəki nəhəng boşluğu Sİ tapdı"
fact: "CVSS 9,2"
factLabel: "PHP2Shell boşluqlarının ən yüksək balı"
category: "Süni İntellekt"
---
PHP tərtibatçıları oktyabrın 21-də dilin əsas mühərrikindəki iki kritik təhlükəsizlik boşluğu üçün təcili yamaq yayımladı. "PHP2Shell" adlandırılan və CVE-2026-109618 ilə CVE-2026-109619 nömrələrini alan boşluqlar süni intellekt alətlərinin köməyi ilə tapılıb.

## Nə baş verdi?

Fortune-a görə süni intellekt təhlükəsizlik testi şirkəti Calif zəncirin ilk hissəsini avqustun 1-də GPT-5.6 Sol ilə tapdı; Wiz isə ilk boşluğu müstəqil olaraq avqustun 19-da aşkarladı və avqustun 24-də PHP təhlükəsizlik komandasına bildirdi. Kəşfdə Wiz-in öz aləti Wiz Atlas ilə OpenAI-nin GPT-5.6 Sol və Google-un Gemini 4 Argon modellərindən istifadə olunub.

Boşluqlar hücumçuya giriş etmədən serverdə uzaqdan kod işlətməyə və yaddaşdakı məlumatları oğurlamağa imkan verir. Wiz-ə görə son on ildə çıxan demək olar ki, bütün PHP versiyaları, 5.4-ə qədər geriyə, təsirlənir. Ən yüksək ciddilik balı CVSS şkalasında 9,2-dir. PHP dünyadakı vebsaytların təxminən 70 faizinin arxasında işləyir; təkcə WordPress belə saytların təqribən 40 faizini idarə edir. Fortune-un yenilənmiş xəbərinə görə boşluqlar yamaqdan sonra geniş miqyasda istismar olunmağa başlayıb.

## Niyə önəmlidir?

Bu, süni intellektin təhlükəsizlik tədqiqatında artıq yalnız köməkçi deyil, kəşfi edən tərəf ola bildiyinin ən konkret nümunələrindən biridir. Amma eyni alətlər hücumçuların əlindədir və yamağın çıxması ilə istismarın başlaması arasındakı müddət qısalır. PHP istifadə edən hər sayt sahibi serverini dərhal yeniləməlidir. Daha geniş mənzərədə internetin onilliklərdir işləyən köhnə kodlarındakı gizli xətalar indi daha sürətlə üzə çıxa bilər. Şəbəkədə özü dolaşan ilk proqramın hekayəsini [Creeper yazımızda](/yazi/creeper-ilk-virus-zararsizdi/) danışmışdıq.
