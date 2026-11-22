---
title: "WhatsApp üç güvenlik açığını kapattı: biri dolandırıcılıkta kullanılmış olabilir"
slug: "2026-11-22-whatsapp-uc-guvenlik-acigi"
date: "2026-11-22"
rank: 3
category: "Haber"
excerpt: "WhatsApp, Android'de IP bilgisini sızdırabilen ve bir dolandırıcılık kampanyasında kullanıldığından şüphelenilen açık dahil üç güvenlik açığını düzeltti."
hook: "Bir mesaj, IP adresinizi ele verebilirdi"
fact: "3 açık"
factLabel: "kasımda kapatılan güvenlik açığı"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-22-whatsapp-uc-guvenlik-acigi.webp"
readMin: 2
sources:
  - title: "WhatsApp Patches 3 Security Flaws, Including Android Bug Suspected of Use in Scams (The Hacker News)"
    url: "https://thehackernews.com/2026/11/whatsapp-patches-3-security-flaws.html"
  - title: "WhatsApp fixes three security flaws, including Android bug linked to suspected scam use (Business Upturn)"
    url: "https://businessupturn.com/technology/whatsapp-fixes-three-security-flaws-including-android-bug-linked-to-suspected-scam-use/"
---
WhatsApp, 20 Kasım'da yayımladığı güvenlik bildirimleriyle üç açığı kapattığını duyurdu. Bunlardan biri, şirketin bir dolandırıcılık kampanyasında kullanıldığından şüphelendiği bir Android hatası.

## Açıklar neler?

İlki CVE-2026-23871 koduyla izleniyor ve 2.26.17.4 öncesi Android için WhatsApp ile WhatsApp Business sürümlerini etkiliyor. Business Upturn'ün aktardığına göre "WhatsApp'a tıkla" reklamlarına verilen yanıtlardaki dış adresler yeterince denetlenmiyordu. Özel hazırlanmış bir mesaj sohbette göründüğünde cihaz, IP bilgisini karşı tarafa açık edebiliyordu. WhatsApp, hatayı bir dolandırıcılık kampanyasını engellemeye çalışırken bulduğunu ve bir dolandırıcının bunu sahte mesajını daha inandırıcı göstermek için kullandığını düşündüğünü söyledi. Kaç kişinin etkilendiği açıklanmadı.

İkinci açık CVE-2026-102769, 2.26.35.74 öncesi Android sürümlerinde bir SQL enjeksiyonu. Resmî olmayan bir uygulamadan gönderilen sahte bir sipariş mesajına dokunulduğunda, WhatsApp'ın telefonda sakladığı bazı dosyalar silinebiliyordu. Bu açığı bir araştırmacı Meta'nın hata ödül programı üzerinden bildirdi.

Üçüncüsü CVE-2026-44908, Meta AI'ın gizli hesaplama altyapısıyla kurulan bağlantıdaki sertifika denetimiyle ilgili ve Android, iOS ile Mac uygulamalarını etkiliyordu. Bunu kullanmak için saldırganın Meta'nın kendi altyapısında konumlanmış olması gerekiyordu. WhatsApp, son iki açığın gerçek saldırılarda kullanıldığına dair kanıt bulmadığını belirtiyor.

## Ne yapmalı?

Şirketin önerisi basit: WhatsApp'ı ve telefonun işletim sistemini güncel tutmak. Uygulama mağazasından güncellemeleri kontrol etmek bu açıkların kapanması için yeterli.

## Neden önemli?

Milyarlarca kişinin kullandığı bir uygulamada IP adresinin sızması, konumun kabaca tahmin edilmesine ve hedefli dolandırıcılığa kapı açabilir. Dolandırıcıların artık sadece sahte mesajlara değil, uygulamanın kendi hatalarına da başvurması dikkat çekici. WhatsApp'ın kuruluş hikâyesini [Brian Acton yazımızda](/yazi/whatsapp-brian-acton-facebook-reddi/) anlatmıştık.
