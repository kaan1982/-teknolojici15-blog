---
title: "Sənəd skill-ləri: Word, Excel, PowerPoint və PDF-i agentə öyrətmək"
excerpt: "Anthropic-in docx, xlsx, pptx və pdf skill-ləri nə edir, harada işləyir? Sənəd istehsalı üçün həqiqətən işə yarayan rəsmi və köməkçi skill-lər."
hook: "Hesabat, cədvəl, təqdimat: hamısı bir skill"
fact: "4 SƏNƏD"
factLabel: "Hazır gələn sənəd skill-lərinin sayı"
category: "Süni İntellekt"
---
Süni intellektə "mənə bir hesabat hazırla" demək asandır. Çətin olan, hesabatın həqiqətən açıla bilən, formatı pozulmayan, düsturları işləyən bir Word və ya Excel faylı kimi gəlməsidir. Skill-lərin ilk və bəlkə də ən çox istifadə olunan kateqoriyası məhz budur: ofis sənədləri. Bu yazıda yalnız mövcud olduğunu təsdiqlədiyimiz skill-ləri ələ alırıq.
## Dörd əsas daş: docx, xlsx, pptx, pdf
Claude sənədlərinə görə Anthropic-in hazır təqdim etdiyi (pre-built) dörd sənəd skill-i var. Bunlar Claude-un fayl yaratma funksiyasının arxa planında işləyir və Anthropic mənbə kodlarını anthropics/skills GitHub deposunda yayımlayır.
| Skill | Nə edir? (rəsmi təsvirlərdən) |
|---|---|
| docx | Word sənədləri yaradır, oxuyur, redaktə edir. Formatlaşdırma, şablonlar daxil |
| xlsx | Cədvəl açır, redaktə edir, düstur və qrafik əlavə edir, səliqəsiz məlumatı təmizləyir |
| pptx | Təqdimat yaradır, slaydları redaktə edir, .pptx məzmununu oxuyub təhlil edir |
| pdf | Mətn və cədvəl çıxarır, PDF birləşdirir, bölür, form doldurur, su nişanı əlavə edir |
Depodakı təsvirlər xeyli "israrlı" yazılıb. Məsələn, pptx skill-inin təsviri, bir .pptx faylı giriş və ya çıxış kimi "hər hansı bir şəkildə" işin içindədirsə istifadə olunmasını deyir. Bu, əvvəlki yazıda izah etdiyimiz "təsvir işə salır" qaydasının rəsmi nümunəsidir.
## Harada istifadə edə bilərsən?
2026-cı ilin oktyabrına olan vəziyyətlə Claude sənədlərinə görə bu dörd skill claude.ai-da sənəd yaradılarkən öz-özünə aktivdir və Claude API-də də hazır skill kimi çağırıla bilir. Claude Code-da isə hazır sənəd skill-ləri quraşdırılmış gəlmir. Amma anthropics/skills deposu Claude Code üçün əlavə bazarı kimi əlavə oluna bilir və document-skills paketi quraşdırıla bilir. Depodakı təlimata görə əvvəlcə /plugin marketplace add anthropics/skills əmri ilə bazar əlavə olunur, sonra document-skills@anthropic-agent-skills quraşdırılır.
Lisenziya mövzusunda bir fərq var. Depodakı bir çox skill Apache 2.0 lisenziyalı açıq mənbədir. Lakin dörd sənəd skill-i "açıq mənbə deyil, mənbəyi əlçatan" (source-available) kimi paylaşılıb. Yəni kodu araşdırıb öyrənə bilərsən, amma öz məhsulunda sərbəst yenidən paylamazdan əvvəl lisenziya faylını oxumalısan.
> **Bilirdinmi?** pdf skill-i mərhələli yükləmənin dərslik nümunəsidir. Anthropic-in mühəndislik yazısına görə form doldurma təlimatları əsas SKILL.md-dən çıxarılıb ayrıca forms.md faylına daşınıb. Claude bu faylı yalnız həqiqətən form doldurarkən oxuyur. Depoda pdf qovluğunun içində bu gün həm forms.md, həm reference.md, həm də scripts qovluğu durur.
## Sənədin yanındakı köməkçilər
Sənəd istehsalı yalnız fayl formatı ilə bitmir. anthropics/skills deposunda məzmun tərəfinə yönəlmiş başqa rəsmi nümunələr də var:
- **doc-coauthoring:** Texniki şərtnamə, təklif, qərar sənədi kimi strukturlaşdırılmış mətnləri birlikdə yazmaq üçün addım-addım iş axını təqdim edir. Konteksti ötürmə, təkrarlı düzəliş və yoxlama mərhələlərindən keçirir.
- **internal-comms:** Status hesabatı, rəhbərlik yeniliyi, şirkət bülleteni, tez-tez verilən suallar kimi daxili kommunikasiya mətnlərini şirkətin üstün tutduğu formatlarda yazmağa kömək edən resurslar toplayır. Qovluqda nümunə mətnlər də var.
- **brand-guidelines:** Anthropic-in rəsmi brend rənglərini və tipoqrafiyasını bir çıxışa tətbiq edir. Əsl dəyəri, öz brendin üçün oxşarını necə qura biləcəyini göstərməsidir.
- **theme-factory:** Slayd, sənəd, hesabat və ya HTML səhifəsinə tətbiq oluna bilən 10 hazır rəng və şrift teması ehtiva edir, istəsən dərhal yeni tema da yaradır.
Yardım Mərkəzi ayrıca Notion, Figma və Atlassian kimi iş ortaqlarının öz MCP bağlayıcıları ilə birlikdə işləyəcək şəkildə hazırladığı skill-lərdən də bəhs edir. Bunlar sənədlərin yarandığı alətlərlə (məs. Notion səhifələri) işləyərkən yarayır.
## Real həyatda necə istifadə olunur?
Ən səmərəli istifadə, hazır sənəd skill-lərini öz kiçik skill-inlə birləşdirməkdir. Məsələn, xlsx skill-i Excel-in necə düzgün yaradılacağını bilir, amma sənin şirkətinin aylıq satış cədvəlində hansı sütunların olmalı olduğunu bilmir. Bunu izah edən qısa bir skill yazsan, iki skill birlikdə işləyib həm düzgün formatlı, həm də sənin standartına uyğun fayl ortaya çıxarır.
Unutmamalı olduğun iki qeyd var. Birincisi, anthropics/skills deposu bu skill-lərin "nümayiş və təlim məqsədli" olduğunu və Claude-un öz davranışının buradakı tətbiqlərdən fərqli ola biləcəyini açıq yazır. İkincisi, sənəd skill-ləri kod icra mühitinə ehtiyac duyur. Yardım Mərkəzinə görə skill-lərin işləməsi üçün kod icrası funksiyasının açıq olması lazımdır.
Növbəti yazıda ekran tərəfinə keçirik: dizayn, ön tərəf və veb çıxışları yaradan skill-lər.
Sən ən çox hansı sənəd növünü hazırlayarkən vaxt itirirsən: cədvəl, təqdimat, yoxsa hesabat?
