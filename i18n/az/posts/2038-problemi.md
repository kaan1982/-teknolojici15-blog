---
title: "2038 problemi: bəzi kompüterlər niyə 1901-ə qayıdacaq?"
excerpt: "32 bitlik Unix vaxtı 2038-ci il yanvarın 19-da 03:14:07 UTC-də dolacaq və köhnə sistemlər tarixi 1901-ci il dekabrın 13-ü sana bilər. 2038 problemi nədir, necə həll olunur?"
hook: "Kompüterlər 1901-ə qayıdacaq!"
fact: "03:14:07"
factLabel: "19 yanvar 2038, UTC: 32 bitlik hədd"
category: "Kompüter"
---
2000-ci ilə girərkən dünya "Y2K" adlı kompüter xətasını danışırdı. İndi növbədə başqa bir tarix var: 19 yanvar 2038. Həmin gün saat 03:14:07-ni (UTC) bir saniyə keçdikdə, bəzi köhnə kompüterlər təqvimi birdən 1901-ə çevirə bilər. Bu elmi-fantastik ssenari deyil, sadə riyaziyyat məsələsidir.
## Kompüterlər vaxtı necə sayır?
Unix və ondan törəyən bir çox sistem vaxtı saat və ya təqvim kimi yox, tək bir ədəd kimi saxlayır. Bu ədəd 1 yanvar 1970-ci il gecə yarısından (UTC) bəri keçən saniyələrdir. Buna "Unix vaxtı" deyilir.
Problem bu ədədin bir çox köhnə sistemdə işarəli 32 bitlik tam ədəd kimi saxlanmasıdır. İşarəli 32 bitlik ədədin ala biləcəyi ən böyük dəyər 2.147.483.647-dir, yəni 2 üstü 31 çıxılsın 1. Bu qədər saniyə təxminən 68 ilə bərabərdir. "İşarəli" olması, bir bitin ədədin müsbət, yoxsa mənfi olduğunu göstərmək üçün ayrılması deməkdir. Buna görə 32 bitin hamısı yox, 31-i böyüklük üçün istifadə olunur.
1970-ə 68 il əlavə edəndə 2038-ə çatırıq. Hesab tam olaraq 19 yanvar 2038, 03:14:07 UTC-ni göstərir.
## Bir saniyə sonra nə olacaq?
Sayğac ən böyük dəyərə çatdıqdan bir saniyə sonra daşır. Avtomobillərin köhnə mexaniki kilometr sayğaclarını düşün: 999.999-dan sonra 000.000-a dönürlər. Burada da buna bənzər bir şey olur, amma ədəd işarəli olduğu üçün dəyər çox böyük mənfi ədədə dönür.
Təsirlənən sistem bu mənfi ədədi 1970-dən geriyə doğru sayılan saniyələr kimi şərh edir. Nəticə: tarix 13 dekabr 1901, saat 20:45:52 (UTC) kimi görünür. Birdən 136 il geriyə getmiş kompüterdə sertifikatlar, taymerlər, qeydlər və tarix müqayisələri səhv işləməyə başlaya bilər.
> **Bilirdinmi?** Bu problem bəzi proqramlarda 2038-i gözləmədən artıq ortaya çıxıb. Wikipedia-ya görə 2006-cı ildə AOLserver proqramı, bir gözləmə müddəti dəyərini bir milyard saniyə irəli təyin etdiyi üçün 2038 həddini aşıb çöküb. Yəni "gələcəkdəki bir tarixi" hesablayan hər proqram həddə indidən toqquşa bilər. Oxşar 32 bit həddi 2022-ci ildə Microsoft Exchange-də də problem yaratdı: bir yeniləmənin versiya nömrəsi vaxt damğası kimi oxunub həddi aşdıqda zərərli proqram skan funksiyaları dayandı.
## Kimlər risk altındadır?
Gündəlik istifadə etdiyin müasir telefon və kompüterlərin böyük əksəriyyəti artıq 64 bitlik vaxt dəyərləri işlədir. Əsl risk uzun illər yenilənmədən işləyən sistemlərdədir. Wikipedia xüsusilə köhnə (legacy) və quraşdırılmış sistemləri önə çıxarır: sənaye nəzarət cihazları, bəzi şəbəkə cihazları, avtomobil daxili sistemlər kimi bir dəfə quraşdırılıb unudulan maşınlar.
Bu cür cihazlar tez-tez yenilənmədiyi üçün 2038 gələndə içlərində hələ də 32 bitlik vaxt sayan bir hissə qalmış ola bilər.
| 32 bit işarəli vaxt | 64 bit işarəli vaxt |
|---|---|
| Ən böyük dəyər 2.147.483.647 | Çox daha böyük diapazon |
| Hədd: 19 yanvar 2038 | Hədd: təxminən 292 milyard il sonra |
| Köhnə və quraşdırılmış sistemlər | Müasir əməliyyat sistemləri |
## Həll: daha böyük sayğac
Buradakı çətinlik texniki olmaqdan çox praktikdir. Vaxtı saxlayan ədədin ölçüsünü dəyişmək, o ədədi istifadə edən hər proqramı, hər fayl formatını və hər verilənlər bazası sahəsini təsirləndirə bilər. Tək bir sətri düzəltmək asandır; bir cihazın içindəki bütün proqram təminatını tapıb yeniləmək isə illər çəkə bilər.
Həll ideya olaraq sadədir: vaxtı 64 bitlik işarəli ədədlə saxlamaq. Wikipedia-ya görə bu, daşma anını təxminən 292 milyard il sonraya itələyir. Yəni kainatın bugünkü yaşından çox-çox uzağa.
Bu keçid illərdir davam edir. Phoronix-in 2020-ci il yanvar tarixli xəbərinə görə Linux 5.6, 32 bitlik sistemlərin 2038-dən sonra işləyə bilməsi üçün əsas yarada biləcək ilk əsas nüvə versiyası kimi hazırlanırdı. Wikipedia, 2020-ci ildə çıxan Linux 5.6-nın 32 bitlik arxitekturalarda 64 bitlik vaxt dəstəyi əlavə etdiyini bildirir. Bunun işləməsi üçün tətbiqlərin də 64 bitlik vaxtla yenidən tərtib olunması lazımdır.
Başqa bir həll təklifi ədədi işarəsiz (unsigned) etməkdir. Amma bu, həddi yalnız 2106-ya aparır və 1970-dən əvvəlki tarixlərin istifadəsini pozur. Buna görə əsas yol 64 bitə keçmək sayılır.
Y2K böyük fəlakətə çevrilmədi, çünki insanlar əvvəlcədən çalışdı; səncə 2038-ə qalan illərdə də eyni səssiz qəhrəmanlıq təkrarlanacaqmı?
