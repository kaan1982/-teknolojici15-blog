---
title: "İlk bilgisayar şifresi daha ilk yılında çalındı"
slug: "ilk-bilgisayar-sifresi-ctss"
date: "2026-10-30"
year: 1962
yearLabel: "1962"
category: "İlkler"
excerpt: "MIT'nin CTSS sistemi parolayı bilgisayara getirdi. Kısa süre sonra bir doktora öğrencisi tüm şifreleri yazıcıdan çıkardı. İlk şifrenin ilk hack hikâyesi."
hook: "İlk şifre, ilk hacklenen oldu"
fact: "1962"
factLabel: "İlk bilinen şifre hırsızlığı"
cover: "/img/kapak/gen-ilk-bilgisayar-sifresi-ctss.webp"
video: false
readMin: 4
sources:
  - title: "Compatible Time-Sharing System (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Compatible_Time-Sharing_System"
  - title: "Tom Van Vleck: The IBM 7094 and CTSS (multicians.org)"
    url: "https://www.multicians.org/thvv/7094.html"
  - title: "The World's First Computer Password? It Was Useless Too (Wired, Gizmodo yeniden yayını)"
    url: "https://gizmodo.com/the-world-s-first-computer-password-it-was-useless-too-5879856"
  - title: "Who Invented Computer Passwords? (Today I Found Out)"
    url: "https://www.todayifoundout.com/index.php/2018/06/who-invented-computer-passwords/"
---

Her gün onlarca kez yazdığın şifrenin bir doğum yeri var: 1960'ların başında MIT'deki tek bir dev bilgisayar. Daha da ilginci, dünyanın bilinen ilk bilgisayar şifreleri, kullanılmaya başlandıktan kısa süre sonra toplu hâlde çalındı. Hem de bir hacker çetesi tarafından değil, daha fazla bilgisayar saati isteyen bir doktora öğrencisi tarafından.

## Bir bilgisayar, onlarca kullanıcı

1960'ların başında bilgisayarlar odaları dolduran, tek seferde tek iş yapan makinelerdi. Programını delikli kartlara basar, sıraya koyar, sonucu saatler sonra alırdın. MIT'de Fernando Corbató'nun ekibi bunu değiştirmek istedi: aynı makineyi aynı anda birçok kişinin terminalden kullanabileceği bir sistem, yani "zaman paylaşımı".

Bu sistemin adı CTSS (Compatible Time-Sharing System) oldu. İlk kez Kasım 1961'de MIT'nin değiştirilmiş IBM 709 bilgisayarında gösterildi, ilerleyen yıllarda IBM 7094'lerde çalıştı. Wikipedia'nın da aktardığı gibi CTSS, parola ile oturum açmayı uygulayan ilk bilgisayar sistemi olarak kabul ediliyor.

## Şifre neden gerekti?

Sorun basitti: aynı makinede onlarca kişinin dosyası ve kendine ayrılmış bilgisayar süresi vardı. Kimin kim olduğunu ayırt etmenin bir yolu gerekiyordu. Corbató yıllar sonra Wired'a bunu şöyle anlattı: her kullanıcıya kilit olarak bir şifre koymak "çok basit bir çözüm" gibi görünmüştü.

Corbató kendini "ilk" ilan etmekte de temkinliydi. IBM'in 1960'taki Sabre rezervasyon sisteminin de muhtemelen şifre kullandığını söyledi, ama bununla ilgili kayıt kalmadığı için kesin bir şey bilinmiyor. Şifrelerin CTSS'ye tam olarak hangi yıl eklendiği konusunda da kaynaklar farklı şeyler söylüyor. Bildiğimiz şu: 1962 baharında şifre sistemi çalışıyordu, çünkü o bahar çalındı.

## Allan Scherr'in Cuma gecesi planı

Allan Scherr, MIT'de doktora yapan bir araştırmacıydı ve karmaşık simülasyonlar çalıştırıyordu. Wired'ın aktardığına göre CTSS'de ona haftada yalnızca dört saat ayrılmıştı (bazı kaynaklar günde dört saat diyor). Bu süre ona yetmiyordu.

Çözümü zekice ama bir o kadar da yaramazdı. Sistemin dosyaları çevrimdışı yazdırma özelliğinden yararlanarak, şifre dosyasının çıktısını isteyen bir delikli kart hazırladı. Kartı bir Cuma gecesi geç saatte sıraya koydu, Cumartesi sabahı erkenden gelip çıktıyı aldı. Elinde artık sistemdeki herkesin şifresi vardı.

İzini kaybettirmek için şifreleri başka kullanıcılarla da paylaştı. Wired'a göre bunlardan biri, J.C.R. Licklider, laboratuvar müdürü Robert Fano'nun hesabına girip alaycı mesajlar bıraktı. Scherr hiç yakalanmadı ve olaydan yaklaşık çeyrek asır sonra durumu Fano'ya bizzat itiraf etti. Fano da ona doktora unvanının geri alınmayacağı güvencesini verdi.

> **Biliyor muydun?** CTSS'deki tek şifre krizi bu değildi. 1966'da bir yöneticinin hatası yüzünden şifre dosyası ile "günün mesajı" dosyası yer değiştirdi ve oturum açan herkes tüm şifreleri ekranında açık açık gördü. Sistem geliştiricisi Tom Van Vleck'e göre bu olay, şifreleri tek yönlü şifreleyerek saklama fikrinin çıkış noktası oldu. Tabii olay Cuma akşamı saat beşte yaşandı ve Van Vleck saatlerce şifre değiştirmek zorunda kaldı.

## O zaman ve şimdi

| O zaman (1960'lar) | Şimdi |
|---|---|
| Tek bir dosyada düz metin şifreler | Tek yönlü özetlenmiş (hash) şifreler |
| Çıktı almak için bir delikli kart yeterliydi | Erişim kayıtları, yetki katmanları |
| Amaç: bilgisayar saatini paylaştırmak | Amaç: kimlik, para, kişisel veri korumak |
| Bir makine, bir kampüs | Kişi başı onlarca hesap |

Bu hikâyenin bugün hâlâ öğretici olmasının sebebi şu: şifre, icat edildiği günden beri insan davranışıyla sınanıyor. Scherr sistemi kırmak için karmaşık bir saldırı yapmadı, sadece sistemin zaten sunduğu bir özelliği beklenmedik bir şekilde kullandı. Bugünkü sızıntıların da önemli bir kısmı benzer basit hatalardan doğuyor.

Corbató zaman paylaşımı alanındaki çalışmalarıyla 1990'da Turing Ödülü'nü aldı. Onun ekibinin "basit çözüm" diye eklediği kilit, bugün e-postandan bankana kadar her kapıda duruyor ve hâlâ en zayıf halka çoğu zaman o kilidi kullanan insan.

Sence bugün şifre kullanmayı tamamen bırakıp yerine tamamen biyometri ya da geçiş anahtarına (passkey) geçmeye hazır mıyız?
