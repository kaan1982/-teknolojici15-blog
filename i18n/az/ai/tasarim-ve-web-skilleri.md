---
title: "Dizayn və veb skill-ləri: şablon qoxusu verməyən interfeyslər üçün"
excerpt: "frontend-design, web-artifacts-builder, canvas-design və Vercel-in web-design-guidelines skill-i. Agentin yaratdığı interfeysi yaxşılaşdıran real skill-lər."
hook: "Süni intellekt dizaynı niyə həmişə eynidir?"
fact: "10 TEMA"
factLabel: "theme-factory-dəki hazır tema sayı"
category: "Süni İntellekt"
---
Süni intellektə veb səhifə hazırlatmısansa, yəqin ki, bunu fərq etmisən: nəticə işləyir, amma haradansa tanış gəlir. Eyni bənövşəyi keçidlər, eyni mərkəzləşdirilmiş başlıq, eyni kart düzümü. Dizayn skill-lərinin böyük hissəsi məhz bu problemlə məşğul olur: modelə "defoltu" yox, şüurlu dizayn qərarı verdirmək.
Bu yazıdakı hər skill-in mənbəyini göstərdik. Anthropic-in rəsmi deposu anthropics/skills, icma və ya şirkət depoları isə ayrıca qeyd olunub.
## frontend-design: defoltdan qaçmaq
Rəsmi depodakı frontend-design skill-inin təsviri aydındır: yeni interfeys qurarkən və ya mövcud birini yenidən formalaşdırarkən "şüurlu, fərqləndirici vizual dizayn" üçün rəhbərlik. Estetik istiqamət, tipoqrafiya və "şablon kimi oxunmayan" seçimlər etməkdə kömək edir.
Skill-in gövdəsi modeli dizayn studiyasının dizayn lideri roluna salır və müştərinin klişe təklifləri artıq rədd etdiyini fərz edərək işə başladır. Bu, yaxşı skill yazma texnikasının da nümunəsidir: məlumat yığmaq əvəzinə modelə aydın bir baxış bucağı vermək.
## Veb çıxışları: web-artifacts-builder və webapp-testing
- **web-artifacts-builder (rəsmi):** claude.ai-da React, Tailwind CSS və shadcn/ui kimi müasir ön tərəf texnologiyaları ilə çoxkomponentli, vəziyyət idarəsi və ya marşrutlaşdırma tələb edən mürəkkəb HTML çıxışları yaratmaq üçün alət dəsti. Təsviri, sadə tək fayllıq HTML işləri üçün istifadə olunmamalı olduğunu da deyir. Qovluqda layihəni başladan və tək fayla paketləyən skriptlər var.
- **webapp-testing (rəsmi):** Lokal veb tətbiqləri Playwright ilə test etmək üçün alət dəsti. Ön tərəf funksiyalarını yoxlamağa, interfeys xətalarını ayıklamağa, ekran görüntüsü almağa və brauzer jurnallarını oxumağa xidmət edir. Dizaynı etdikdən sonra "həqiqətən işləyirmi?" sualının cavabıdır.
> **Bilirdinmi?** Rəsmi depodakı theme-factory skill-i, slayddan HTML açılış səhifəsinə qədər hər çıxışa tətbiq oluna bilən 10 hazır tema ilə gəlir. Qovluqdakı tema fayllarının adları belə ilham vericidir: "arctic-frost", "midnight-galaxy", "golden-hour", "tech-innovation" kimi. İstəsən skill dərhal yeni tema da yarada bilir.
## Vizual sənət: canvas-design, algorithmic-art, slack-gif-creator
Anthropic-in depoda "yaradıcı" tərəfi təmsil edən üç skill daha var:
- **canvas-design:** Poster, sənət əsəri və ya statik dizaynları .png və .pdf kimi yaratmaq üçün "dizayn fəlsəfəsi" yanaşması istifadə edir. Qovluqda 80-dən çox şrift faylı var. Təsviri, mövcud sənətkarların işlərini kopyalamamağı açıq şərt qoyur.
- **algorithmic-art:** p5.js ilə, toxumlu təsadüfilik (seeded randomness) və interaktiv parametrlərlə generativ sənət yaradır. Axın sahələri, hissəcik sistemləri kimi istəklər üçün nəzərdə tutulub.
- **slack-gif-creator:** Slack üçün optimallaşdırılmış animasiyalı GIF-lər yaratmağa yönəlik məhdudiyyətlər, yoxlama alətləri və animasiya ideyaları təqdim edir. "Mənə X-in Y etdiyi bir Slack GIF-i yap" tipli istəklər üçündür.
## İcmadan: Vercel-in interfeys və React skill-ləri
Rəsmi depodan kənarda ən çox tanınan dizayn yönümlü paketlərdən biri Vercel-in vercel-labs/agent-skills deposudur. 2026-cı ilin oktyabrına olan vəziyyətlə depoda bunlar var:
| Skill | Nə edir? |
|---|---|
| web-design-guidelines | İnterfeys kodunu əlçatanlıq, performans və istifadəçi təcrübəsini əhatə edən 100-dən çox qaydaya görə yoxlayır |
| vercel-react-best-practices | Vercel mühəndisliyinin React və Next.js performans qaydaları (8 kateqoriyada 40-dan çox) |
| vercel-composition-patterns | Miqyaslana bilən React komponent kompozisiyası şablonları |
| vercel-react-view-transitions | React-in View Transition API-si ilə axıcı keçid animasiyaları |
| vercel-react-native-skills | React Native və Expo üçün performans və memarlıq qaydaları |
Bu skill-lər tək bir alətə bağlı deyil. Vercel-in deposu npx skills add vercel-labs/agent-skills əmri ilə quraşdırmanı tövsiyə edir və skill-lər Agent Skills standartını dəstəkləyən fərqli agentlərdə istifadə oluna bilir.
## Hansını nə vaxt istifadə etməli?
Praktik bir sıralama belə ola bilər: dizayn istiqamətini frontend-design ilə müəyyən et, rəngi və şrifti theme-factory və ya öz brend skill-inlə sabitlə, çıxışı web-artifacts-builder ilə yarat, sonra web-design-guidelines ilə yoxlayıb webapp-testing ilə brauzerdə sına. Hər biri ayrı ixtisasdır və mərhələli yükləmə sayəsində hamısını eyni anda quraşdırılmış saxlamaq konteksti şişirtmir.
Bir xəbərdarlıq: bu skill-lərin bəziləri (məs. web-artifacts-builder) skript icra edir. Claude sənədləri skill-lərə proqram quraşdırır kimi yanaşmağı və yalnız güvəndiyin mənbələrdən quraşdırmağı tövsiyə edir. Rəsmi depodan kənardan gələn hər paketi quraşdırmazdan əvvəl SKILL.md və skriptlərinə nəzər salmağın yaxşı vərdişdir.
Səncə süni intellektlə hazırlanan dizaynlar zamanla daha çeşidli olacaq, yoxsa hamı eyni skill-lərdən istifadə etdikcə yeni bir "təktip" doğacaq?
