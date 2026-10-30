---
title: "İlk bilgisayar 'virüsü' Creeper hiçbir şeyi silmedi"
slug: "creeper-ilk-virus-zararsizdi"
date: "2026-10-27"
year: 1971
yearLabel: "1971"
category: "Bilgisayar"
excerpt: "1971'de ARPANET'te dolaşan Creeper hiçbir veriye dokunmadı, sadece ekrana bir meydan okuma yazdı. Onu yakalamak için ilk antivirüs Reaper yazıldı."
hook: "İlk virüs hiçbir şeyi silmedi!"
fact: "1971"
factLabel: "Creeper, BBN'de yazıldı"
cover: "/img/kapak/hook20-creeperilkvirus.jpg"
video: true
readMin: 4
sources:
  - title: "Creeper and Reaper (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Creeper_and_Reaper"
  - title: "Professor Len Adleman explains how he coined the term computer virus, WeLiveSecurity (ESET)"
    url: "https://www.welivesecurity.com/2017/11/01/professor-len-adleman-explains-computer-virus-term/"
---

"Bilgisayar virüsü" deyince dosyaları silen, verileri rehin alan, ekranı kilitleyen bir şey gelir aklımıza. Oysa çoğu kaynağın "ilk virüs" diye andığı program bunların hiçbirini yapmadı. Tek yaptığı, ekrana küçük bir meydan okuma yazıp bir sonraki bilgisayara geçmekti.

Adı Creeper'dı, yani "sürüngen".

## 1971, BBN ve ARPANET

Creeper'ı 1971'de Bob Thomas, Massachusetts'teki BBN (Bolt Beranek and Newman) şirketinde deneysel bir program olarak yazdı. BBN, internetin atası sayılan ARPANET'in kurulmasında kilit rol oynayan şirketti.

Program, ARPANET'e bağlı ve TENEX işletim sistemini çalıştıran DEC PDP-10 ana bilgisayarları arasında dolaşıyordu. Wikipedia'ya göre o dönemde ARPANET üzerinde TENEX çalıştıran sistem sayısı 28'di, yani Creeper'ın ulaşabileceği bilgisayar sayısı en fazla buydu.

Bob Thomas'ın asıl derdi kötülük değil, bir soruyu yanıtlamaktı: bir program kendi kendine ağ üzerinde bir makineden diğerine taşınabilir mi?

## Ekrandaki tek cümle

Creeper bir makineye ulaştığında teletype (yazıcılı terminal) üzerine şu mesajı basıyordu:

"I'M THE CREEPER : CATCH ME IF YOU CAN"

Türkçesiyle: "Ben Sürüngen'im: Yakalayabilirsen yakala." Hepsi bu. Hiçbir dosyayı silmedi, hiçbir veriyi bozmadı. Wikipedia, operatörlerin bu deneyde iş birliği yaptığını ve istenmeyen bir etki bildirilmediğini aktarıyor.

İlk sürüm aslında kendini kopyalamıyordu bile: bir makineden diğerine geçerken arkasında kopya bırakmadan taşınıyordu. Daha sonra e-postanın mucidi olarak bilinen Ray Tomlinson, programı kendini diğer makinelere kopyalayacak şekilde değiştirdi. Kendini çoğaltan bu sürüm, genel kabul gören ilk bilgisayar solucanı (worm) sayılıyor.

## Virüs mü, solucan mı?

Burada küçük ama önemli bir düzeltme gerekiyor. Teknik olarak Creeper bir virüs değil, bir solucandı. Virüs başka bir programa ya da dosyaya yapışarak yayılır; solucan ise ağ üzerinden kendi başına hareket eder. Creeper ikinci gruba giriyor. Yine de pek çok yayın onu "dünyanın ilk bilgisayar virüsü" olarak anıyor; Wikipedia'nın aktardığı bir Guardian alıntısı da tam olarak bu ifadeyi kullanıyor. Kavramın popüler hâli bu, ama teknik olarak doğru etiket "ilk solucan".

"Bilgisayar virüsü" teriminin kendisi ise Creeper'dan 12 yıl sonra doğdu. ESET'in WeLiveSecurity yazısına göre Güney Kaliforniya Üniversitesi'nde öğrenci olan Fred Cohen 3 Kasım 1983'te kendini yayan bir program yazdı; hocası Len Adleman da bu "enfeksiyon" benzeri yayılmayı biyolojideki virüslere benzeterek terimi önerdi. Cohen programı Unix çalıştıran bir VAX 11/750 üzerinde, yaklaşık sekiz saatlik bir çalışmayla hazırlamıştı.

> **Biliyor muydun?** E-postayı icat eden ve @ işaretini adreslere taşıyan Ray Tomlinson, aynı zamanda ilk antivirüs sayılan programın da yaratıcısı. Yani internetin en sevilen aracını da, ilk "temizlikçisini" de aynı kişi yazdı.

## Reaper: ilk antivirüs

Ağda kendini kopyalayan bir program olunca, onu durduracak bir şeye de ihtiyaç doğdu. Ray Tomlinson 1972'de Reaper ("Orakçı") adında bir program yazdı. Reaper da ARPANET üzerinde dolaşıyor, Creeper'ı bulduğu yerde siliyordu. Wikipedia onu ilk antivirüs yazılımı olarak tanımlıyor.

Bu hikâyede güzel bir ironi var: dünyanın ilk antivirüsü de aslında kendi kendine ağda dolaşan bir programdı. Yani "solucanı" yakalamak için bir başka "solucan" yazılmıştı.

| O zaman | Şimdi |
|---|---|
| 1971: en fazla 28 TENEX makinesi | Milyarlarca bağlı cihaz |
| Ekrana tek bir şaka cümlesi | Fidye yazılımı, veri hırsızlığı |
| Reaper: tek hedefi olan temizlikçi | Sürekli güncellenen güvenlik yazılımları |

## Masum bir deneyin uzun gölgesi

Creeper zararsızdı ama bir kapıyı araladı: bir program ağ üzerinde kendi başına yayılabiliyorsa, birileri bu gücü kötü amaçla da kullanabilirdi. Sonraki on yıllarda tam olarak bu oldu ve "virüs", "solucan", "antivirüs" kelimeleri gündelik dilimize girdi.

Bugün bir güvenlik araştırmacısı benzer bir deneyi izin almadan internete salsa, büyük ihtimalle başı ciddi biçimde derde girerdi. 1971'in ARPANET'i ise birbirini tanıyan araştırmacılardan oluşan küçük bir topluluktu ve deney, Wikipedia'nın aktardığı gibi operatörlerin iş birliğiyle yürütüldü.

Yine de başlangıç noktası bir saldırı değil, bir meraktı. Bir mühendis "acaba yapılabilir mi?" diye sordu ve cevabı ekranda tek bir cümleyle verdi.

Sence Creeper bugün yazılsaydı, zararsız bir deney mi yoksa bir güvenlik ihlali mi sayılırdı?
