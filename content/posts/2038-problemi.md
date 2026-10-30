---
title: "2038 problemi: bazı bilgisayarlar neden 1901'e dönecek?"
slug: "2038-problemi"
date: "2026-10-25"
year: 2038
yearLabel: "2038"
category: "Bilgisayar"
excerpt: "32 bitlik Unix zamanı 19 Ocak 2038 03:14:07 UTC'de dolacak ve eski sistemler tarihi 13 Aralık 1901 sanabilir. 2038 problemi ne, nasıl çözülüyor?"
hook: "Bilgisayarlar 1901'e dönecek!"
fact: "03:14:07"
factLabel: "19 Ocak 2038, UTC: 32 bitlik sınır"
cover: "/img/kapak/hook16-2038problemi.jpg"
video: true
readMin: 4
sources:
  - title: "Year 2038 problem (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Year_2038_problem"
  - title: "Linux 5.6 Is The First Kernel For 32-Bit Systems Ready To Run Past Year 2038 (Phoronix)"
    url: "https://www.phoronix.com/news/Linux-5.6-32-bit-Past-Y2038"
---
2000 yılına girerken dünya "Y2K" diye bir bilgisayar hatasını konuşmuştu. Şimdi sırada başka bir tarih var: 19 Ocak 2038. O gün, saat 03:14:07'yi (UTC) bir saniye geçtiğinde, bazı eski bilgisayarlar takvimi bir anda 1901'e çevirebilir. Bu bir bilim kurgu senaryosu değil, basit bir matematik sorunu.

## Bilgisayarlar zamanı nasıl sayar?

Unix ve ondan türeyen pek çok sistem, zamanı bir saat ya da takvim olarak değil, tek bir sayı olarak tutar. Bu sayı, 1 Ocak 1970 gece yarısından (UTC) bu yana geçen saniyelerdir. Buna "Unix zamanı" denir.

Sorun, bu sayının birçok eski sistemde işaretli 32 bitlik bir tamsayı olarak saklanması. İşaretli 32 bitlik bir sayının alabileceği en büyük değer 2.147.483.647'dir, yani 2 üzeri 31 eksi 1. Bu kadar saniye yaklaşık 68 yıla denk gelir. "İşaretli" olması, bir bitin sayının artı mı eksi mi olduğunu göstermek için ayrılması demek. Bu yüzden 32 bitin tamamı değil, 31'i büyüklük için kullanılıyor.

1970'e 68 yıl ekleyince 2038'e ulaşıyoruz. Hesap tam olarak 19 Ocak 2038, 03:14:07 UTC'yi gösteriyor.

## Bir saniye sonra ne olacak?

Sayaç en büyük değere ulaştıktan bir saniye sonra taşar. Arabaların eski mekanik kilometre sayaçlarını düşün: 999.999'dan sonra 000.000'a dönerler. Burada da benzer bir şey olur, ama işaretli sayı olduğu için değer çok büyük bir negatif sayıya döner.

Etkilenen bir sistem bu negatif sayıyı 1970'ten geriye doğru sayılan saniyeler olarak yorumlar. Sonuç: tarih 13 Aralık 1901, saat 20:45:52 (UTC) olarak görünür. Bir anda 136 yıl geriye gitmiş bir bilgisayar; sertifikalar, zamanlayıcılar, kayıtlar ve tarih karşılaştırmaları hatalı çalışmaya başlayabilir.

> **Biliyor muydun?** Bu sorun bazı yazılımlarda 2038'i beklemeden ortaya çıktı bile. Wikipedia'ya göre 2006'da AOLserver yazılımı, bir zaman aşımı değerini bir milyar saniye ileriye ayarladığı için 2038 sınırını aşıp çöktü. Yani "gelecekteki bir tarihi" hesaplayan her program, sınıra şimdiden çarpabilir. Benzer bir 32 bit sınırı 2022'de Microsoft Exchange'de de sorun çıkardı: bir güncellemenin sürüm numarası zaman damgası gibi okunup sınırı aşınca kötü amaçlı yazılım tarama işlevleri durdu.

## Kimler risk altında?

Günlük kullandığın modern telefon ve bilgisayarların büyük çoğunluğu artık 64 bitlik zaman değerleri kullanıyor. Asıl risk, uzun yıllar boyunca güncellenmeden çalışan sistemlerde. Wikipedia özellikle eski (legacy) sistemleri ve gömülü sistemleri öne çıkarıyor: endüstriyel kontrol cihazları, bazı ağ cihazları, araç içi sistemler gibi bir kere kurulup unutulan makineler.

Bu tür cihazlar sık güncellenmediği için, 2038 geldiğinde içlerinde hâlâ 32 bitlik zaman sayan bir parça kalmış olabilir.

| 32 bit işaretli zaman | 64 bit işaretli zaman |
|---|---|
| En büyük değer 2.147.483.647 | Çok daha büyük bir aralık |
| Sınır: 19 Ocak 2038 | Sınır: yaklaşık 292 milyar yıl sonra |
| Eski ve gömülü sistemler | Modern işletim sistemleri |

## Çözüm: daha büyük bir sayaç

Buradaki zorluk teknik olmaktan çok pratik. Zamanı tutan sayının boyutunu değiştirmek, o sayıyı kullanan her programı, her dosya biçimini ve her veritabanı alanını etkileyebilir. Tek bir satırı düzeltmek kolay; bir cihazın içindeki bütün yazılımı bulup güncellemek ise yıllar alabilir.


Çözüm fikir olarak basit: zamanı 64 bitlik işaretli bir sayıyla tutmak. Wikipedia'ya göre bu, taşma anını yaklaşık 292 milyar yıl sonraya iter. Yani evrenin bugünkü yaşının çok ötesine.

Bu geçiş yıllardır sürüyor. Phoronix'in Ocak 2020 tarihli haberine göre Linux 5.6, 32 bitlik sistemlerin 2038 sonrasında çalışabilmesi için temel oluşturabilecek ilk ana çekirdek sürümü olarak hazırlanıyordu. Wikipedia, 2020'de çıkan Linux 5.6'nın 32 bitlik mimarilerde 64 bitlik zaman desteği eklediğini belirtiyor. Bunun işe yaraması için uygulamaların da 64 bitlik zamanla yeniden derlenmesi gerekiyor.

Bir başka çözüm önerisi sayıyı işaretsiz (unsigned) yapmak. Ama bu sınırı yalnızca 2106'ya taşıyor ve 1970 öncesi tarihleri kullanmayı bozuyor. Bu yüzden asıl yol 64 bite geçmek olarak görülüyor.

Y2K büyük bir felakete dönüşmedi, çünkü insanlar önceden çalıştı; sence 2038'e kalan yıllarda da aynı sessiz kahramanlık tekrarlanacak mı?
