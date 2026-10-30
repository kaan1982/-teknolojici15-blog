---
title: "Apollo 11'in Bilgisayarı: \"4 KB Bellek\" Gerçekte Ne Demek?"
slug: "apollo-11-bilgisayari-4-kb-bellek"
date: "2026-10-20"
year: 1969
yearLabel: "1969"
category: "Bilgisayar"
excerpt: "Apollo 11'i Ay'a indiren bilgisayarın yaklaşık 4 KB RAM'i vardı. Programlar ise ipe dokunmuş yaklaşık 72 KB'lık bir ROM'da duruyordu."
hook: "Ay'a 4 KB RAM ile indiler"
fact: "4 KB"
factLabel: "AGC'nin silinebilir belleği (RAM)"
cover: ""
video: true
readMin: 4
sources:
  - title: "Apollo Guidance Computer (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Apollo_Guidance_Computer"
  - title: "Software woven into wire: Core rope and the Apollo Guidance Computer (Ken Shirriff, righto.com)"
    url: "https://www.righto.com/2019/07/software-woven-into-wire-core-rope-and.html"
---
"Ay'a giden bilgisayarın belleği bir fotoğraftan bile küçüktü" cümlesini mutlaka duymuşsundur. Videoda biz de "4 KB" dedik. Bu rakam doğru, ama tek başına eksik kalıyor. Çünkü Apollo Rehberlik Bilgisayarı'nın (Apollo Guidance Computer, kısaca AGC) aslında iki ayrı belleği vardı ve "4 KB" bunlardan yalnızca küçük olanını anlatıyor.

Gel, bu meşhur rakamın içini birlikte açalım.

## "4 KB" tam olarak neyi anlatıyor?

AGC'nin çalışma belleği, yani bugün RAM diyeceğimiz silinebilir bellek, 2.048 "kelime"den oluşuyordu. Her kelime 16 bit uzunluğundaydı: 15 bit veri, 1 bit de hata denetimi için parite. Bir kelimeyi 2 bayt sayarsak 2.048 kelime yaklaşık 4 KB eder. Yani "4 KB" ifadesi, bilgisayarın uçuş sırasında hesap yaparken kullandığı karalama kâğıdının boyutu.

Bu belleğin içinde programlar durmuyordu. Orada anlık konum, hız, sayaçlar ve görevler arasında taşınan ara sonuçlar tutuluyordu. Bellek, manyetik çekirdek (core) denen minik halkalardan yapılmıştı ve elektrik kesilse bile içeriğini koruyordu.

Programlar ise bambaşka bir yerdeydi: 36.864 kelimelik sabit bellekte, yani ROM'da. Aynı hesapla bu yaklaşık 72 KB eder. Kısacası daha doğru cümle şu: Apollo 11 yaklaşık 4 KB RAM ve yaklaşık 72 KB ROM ile Ay'a indi.

## Programlar ipe dokunmuştu

AGC'nin ROM'u "core rope" (çekirdek ipi) belleğiydi ve kelimenin tam anlamıyla elle örülüyordu. Bir tel bir manyetik çekirdeğin içinden geçiyorsa o bit 1, çekirdeğin yanından dolaşıyorsa 0 oluyordu. Yani yazılım, kumaş gibi dokunarak donanıma çevriliyordu.

Bu işi Massachusetts'teki Waltham'da Raytheon çalışanları yaptı. Ken Shirriff'in ayrıntılı incelemesine göre işe alınanların önemli bir kısmı dikiş becerileri nedeniyle yerel tekstil sektöründen gelen kadınlardı. Tek bir modülü örmek yaklaşık 8 hafta sürüyor ve 15.000 dolara mal oluyordu. Her modül 6 bin kelime tutuyordu ve altı modül toplam 36.864 kelimeyi oluşturuyordu.

Bunun yan etkisi önemliydi: yazılım uçuştan aylar önce dondurulmak zorundaydı. Son dakika yaması diye bir şey yoktu, çünkü bir hatayı düzeltmek yeniden örmek anlamına geliyordu.

> **Biliyor muydun?** Apollo 11'de bir değil iki AGC vardı: biri Komuta Modülü'nde, diğeri Ay Modülü'nde. Her biri yaklaşık 32 kg ağırlığındaydı ve 2,048 MHz'lik bir kristal saatle çalışıyordu.

## İnişten dakikalar önce çalan alarm

20 Temmuz 1969'daki iniş sırasında Ay Modülü'nün bilgisayarı ekrana önce 1202, ardından 1201 alarmı verdi. İkisi de "yürütücü taşması" anlamına geliyordu: bilgisayara kaldırabileceğinden fazla iş yükleniyordu. Wikipedia'daki ayrıntılı anlatıma göre sebep, beklemede bırakılan buluşma radarından gelen sahte sinyallerin işlemciyi meşgul etmesiydi. Sorun ne bir programlama hatası ne pilot hatası ne de donanım arızasıydı. Temelde iki sistem arasındaki arayüz belgesindeki bir kusurdan doğmuştu.

Asıl ilginç olan, yazılımın bu durumda ne yaptığı. AGC öncelik tabanlı bir zamanlayıcıyla çalışıyordu. Aşırı yük gelince kendini hızlıca yeniden başlattı, düşük öncelikli işleri bıraktı ve inişi yönetmek gibi kritik görevleri sürdürdü. Yani o meşhur küçük bellek, akıllıca yönetildiği için yetti.

İşleri daha da zorlaştıran bir ayrıntı daha vardı. Buzz Aldrin'in iniş sırasında bilgisayara girdiği 1668 komutu, zaten zorlanan işlemciye ek yük bindirdi ve bir 1202 alarmı daha tetikledi. Yazılım bunu da aynı şekilde atlattı ve Kartal (Eagle) Ay yüzeyine indi.

Yazılım MIT Enstrümantasyon Laboratuvarı'nda geliştirildi. Komuta Modülü yazılımı (COLOSSUS) ve Ay Modülü yazılımı (LUMINARY) farklı ekiplerce yürütüldü. Ayrıntıların hayata geçirilmesi ise Margaret Hamilton'ın yönettiği ekipteydi.

## O zaman / şimdi

| Apollo Rehberlik Bilgisayarı (1969) | Bugünün cep telefonu |
|---|---|
| Yaklaşık 4 KB silinebilir bellek (RAM) | Gigabaytlarca RAM |
| Yaklaşık 72 KB, elle örülmüş ROM | Yüzlerce gigabaytlık depolama |
| Yazılım güncellemesi için aylarca örgü | Gece kendiliğinden inen güncellemeler |
| Yaklaşık 32 kg | Avuç içine sığıyor |

## Rakamın asıl dersi

"4 KB" rakamı çoğu zaman "bak ne kadar ilkelmiş" diye anlatılıyor. Oysa hikâyenin özü tam tersi: kısıtlı bellek, mühendisleri her bitin hesabını vermeye zorladı. Görevlere öncelik veren, aşırı yükte kendini toparlayan bir yazılım bu yüzden doğdu.

Bugün cebimizdeki cihazlar kıyaslanamayacak kadar fazla belleğe sahip, ama çoğu uygulama o kadar özenle yazılmıyor. Bir mesajlaşma uygulamasının tek bir güncellemesi bile, Apollo'nun bütün yazılımından kat kat büyük olabiliyor.

Sence sınırlar mı daha iyi mühendis yetiştirir, yoksa bolluk mu?
