---
title: "Apollo 11-in kompüteri: \"4 KB yaddaş\" əslində nə deməkdir?"
excerpt: "Apollo 11-i Aya endirən kompüterin təxminən 4 KB RAM-ı var idi. Proqramlar isə ip kimi toxunmuş təxminən 72 KB-lıq ROM-da dururdu."
hook: "Aya 4 KB RAM ilə endilər"
fact: "4 KB"
factLabel: "AGC-nin silinə bilən yaddaşı (RAM)"
category: "Kompüter"
---
"Aya gedən kompüterin yaddaşı bir fotoşəkildən də kiçik idi" cümləsini mütləq eşitmisən. Videoda biz də "4 KB" dedik. Bu rəqəm doğrudur, amma tək başına yarımçıq qalır. Çünki Apollo Rəhbərlik Kompüterinin (Apollo Guidance Computer, qısaca AGC) əslində iki ayrı yaddaşı var idi və "4 KB" bunlardan yalnız kiçik olanını izah edir.
Gəl, bu məşhur rəqəmin içini birlikdə açaq.
## "4 KB" tam olaraq nəyi izah edir?
AGC-nin iş yaddaşı, yəni bu gün RAM deyəcəyimiz silinə bilən yaddaş, 2.048 "söz"dən ibarət idi. Hər söz 16 bit uzunluğunda idi: 15 bit məlumat, 1 bit də xəta nəzarəti üçün paritet. Bir sözü 2 bayt saysaq, 2.048 söz təxminən 4 KB edir. Yəni "4 KB" ifadəsi, kompüterin uçuş zamanı hesablama aparanda istifadə etdiyi qaralama kağızının ölçüsüdür.
Bu yaddaşın içində proqramlar dayanmırdı. Orada anlıq mövqe, sürət, sayğaclar və tapşırıqlar arasında daşınan aralıq nəticələr saxlanırdı. Yaddaş maqnit nüvə (core) adlanan kiçik halqalardan hazırlanmışdı və elektrik kəsilsə belə məzmununu qoruyurdu.
Proqramlar isə tamamilə başqa yerdə idi: 36.864 sözlük sabit yaddaşda, yəni ROM-da. Eyni hesabla bu təxminən 72 KB edir. Qısası, daha düzgün cümlə belədir: Apollo 11 təxminən 4 KB RAM və təxminən 72 KB ROM ilə Aya endi.
## Proqramlar ip kimi toxunmuşdu
AGC-nin ROM-u "core rope" (nüvə ipi) yaddaşı idi və sözün əsl mənasında əllə toxunurdu. Bir tel maqnit nüvənin içindən keçirdisə o bit 1, nüvənin yanından dolaşırdısa 0 olurdu. Yəni proqram təminatı parça kimi toxunaraq avadanlığa çevrilirdi.
Bu işi Massachusetts-in Waltham şəhərində Raytheon işçiləri gördü. Ken Shirriff-in ətraflı araşdırmasına görə işə götürülənlərin mühüm hissəsi tikiş bacarıqlarına görə yerli tekstil sektorundan gələn qadınlar idi. Tək bir modulu toxumaq təxminən 8 həftə çəkir və 15.000 dollara başa gəlirdi. Hər modul 6 min söz tuturdu və altı modul cəmi 36.864 sözü təşkil edirdi.
Bunun yan təsiri önəmli idi: proqram təminatı uçuşdan aylar əvvəl dondurulmalı idi. Son dəqiqə yamağı deyə bir şey yox idi, çünki bir xətanı düzəltmək yenidən toxumaq deməkdi.
> **Bilirdinmi?** Apollo 11-də bir yox, iki AGC var idi: biri Komanda Modulunda, digəri Ay Modulunda. Hər biri təxminən 32 kq çəkisində idi və 2,048 MHz-lik kvars saatla işləyirdi.
## Enişdən dəqiqələr əvvəl çalan həyəcan
1969-cu il iyulun 20-dəki eniş zamanı Ay Modulunun kompüteri ekrana əvvəl 1202, ardınca 1201 həyəcanı verdi. İkisi də "icraçı daşması" mənasına gəlirdi: kompüterə qaldıra biləcəyindən çox iş yüklənmişdi. Wikipedia-dakı ətraflı izaha görə səbəb, gözləmədə saxlanan görüş radarından gələn saxta siqnalların prosessoru məşğul etməsi idi. Problem nə proqramlaşdırma xətası, nə pilot xətası, nə də avadanlıq nasazlığı idi. Əsasən iki sistem arasındakı interfeys sənədindəki qüsurdan doğmuşdu.
Əsl maraqlısı proqram təminatının bu vəziyyətdə nə etdiyidir. AGC prioritet əsaslı planlaşdırıcı ilə işləyirdi. Həddindən artıq yük gələndə özünü sürətlə yenidən başlatdı, aşağı prioritetli işləri atdı və enişi idarə etmək kimi kritik tapşırıqları davam etdirdi. Yəni o məşhur kiçik yaddaş, ağıllı idarə olunduğu üçün kifayət etdi.
İşləri daha da çətinləşdirən bir detal da var idi. Buzz Aldrin-in eniş zamanı kompüterə daxil etdiyi 1668 komandası, onsuz da çətinlik çəkən prosessora əlavə yük qoydu və daha bir 1202 həyəcanı tətikləndi. Proqram bunu da eyni şəkildə atlatdı və Qartal (Eagle) Ayın səthinə endi.
Proqram MIT Alətlər Laboratoriyasında hazırlandı. Komanda Modulu proqramı (COLOSSUS) və Ay Modulu proqramı (LUMINARY) fərqli komandalar tərəfindən aparıldı. Detalların həyata keçirilməsi isə Margaret Hamilton-un rəhbərlik etdiyi komandada idi.
## O zaman / indi
| Apollo Rəhbərlik Kompüteri (1969) | Bugünkü cib telefonu |
|---|---|
| Təxminən 4 KB silinə bilən yaddaş (RAM) | Gigabaytlarla RAM |
| Təxminən 72 KB, əllə toxunmuş ROM | Yüzlərlə gigabaytlıq saxlama |
| Proqram yeniləməsi üçün aylarla toxuma | Gecə öz-özünə gələn yeniləmələr |
| Təxminən 32 kq | Ovuca sığır |
## Rəqəmin əsl dərsi
"4 KB" rəqəmi çox vaxt "bax nə qədər ibtidai imiş" deyə danışılır. Əslində hekayənin özü tam əksinədir: məhdud yaddaş mühəndisləri hər bitin hesabını verməyə məcbur etdi. Tapşırıqlara prioritet verən, həddindən artıq yükdə özünü toparlayan proqram təminatı buna görə yarandı.
Bu gün cibimizdəki cihazlar müqayisə edilməyəcək qədər çox yaddaşa malikdir, amma tətbiqlərin çoxu o qədər diqqətlə yazılmır. Bir mesajlaşma tətbiqinin tək bir yeniləməsi belə, Apollo-nun bütün proqram təminatından dəfələrlə böyük ola bilir.
Səncə məhdudiyyətlər daha yaxşı mühəndis yetişdirir, yoxsa bolluq?
