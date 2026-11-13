---
title: "AWS'nin ücretsiz yerel bulut emülatörünü baştan sona yapay zekâ ajanları yazdı"
slug: "2026-11-13-aws-emulator-yapay-zeka-ajanlari"
date: "2026-11-13"
rank: 3
topic: "yapay-zeka"
category: "Haber"
excerpt: "AWS Emulator, 200'den fazla AWS servisini bilgisayarda taklit ediyor; Amazon'a göre kodun tek satırını bile insanlar yazmadı ya da incelemedi."
hook: "Kodu yazan da düzelten de ajan"
fact: "200+"
factLabel: "Taklit edilen AWS servisi"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-13-aws-emulator-yapay-zeka-ajanlari.webp"
readMin: 2
sources:
  - title: "AWS Emulator: free local AWS API emulator written by AI agents (Data Studios)"
    url: "https://www.datastudios.org/post/aws-emulator-free-local-cloud-emulator-written-by-ai-agents"
  - title: "AWS Emulator runs 200 Amazon services offline, and no engineer read its code (Martin Cid Magazine)"
    url: "https://www.martincid.com/technology-sv/aws-emulator-ai-agents-wrote-every-line-200-services-local/"
  - title: "AWS Emulator: Free Local AWS Testing, Written by AI Agents (ShiftDelete.Net)"
    url: "https://shiftdelete.net/en/aws-emulator"
---
Amazon Web Services, 11 Kasım'da AWS Emulator adlı ücretsiz bir geliştirici aracını yayımladı. Araç, AWS bulutunun 200'den fazla servisini geliştiricinin kendi bilgisayarında taklit ediyor. Böylece yazılımlar AWS hesabı açmadan ve bulut faturası ödemeden test edilebiliyor. Asıl dikkat çeken nokta ise aracı kimin yazdığı.

## İnsan yok, ajan var

AWS'nin kıdemli baş mühendisi Matt Goldberg'e göre emülatörün tamamını otonom yapay zekâ ajanları yazdı; ekibi kodun hiçbir satırını ne yazdı ne de inceledi. Proje, Goldberg'in Amazon'un kodlama aracı Kiro ile yaptığı bir hafta sonu deneyi olarak başladı: basit bir mesaj kuyruğu servisinin ilk taklidi yaklaşık 15 dakikada çıktı.

Bugün işi üç ajan ekibi yürütüyor. Birinci ekip testler yazıp bunları gerçek AWS'ye karşı doğruluyor. İkinci ekip aynı testleri emülatörde çalıştırıp farkları hata kaydı olarak açıyor. Üçüncü ekipte her ajan tek bir hatayı düzeltiyor. Değişiklikler derleme, kod standardı, güvenlik ve geriye dönük uyum kontrollerinden geçmeden birleştirilmiyor. Goldberg'e göre yüzlerce ajan günde binlerce hatayı kapatıyor. İnsanların görevi ise testleri, kuralları ve bu kapıları tasarlamak.

## Sınırları

Kod Rust ile yazıldı ve kamu malı sayılan CC0 lisansıyla yayımlandı. Amazon, aracın canlı sistemler ya da güvenlik testi için kullanılmamasını söylüyor: yetki politikalarını gerçek AWS gibi değerlendirmiyor, yavaşlatma, kesinti ve bölge farklarını henüz taklit etmiyor. Desteklenmeyen işlemler HTTP 501 hatası döndürüyor ve kullanım verisi toplama varsayılan olarak açık.

## Neden önemli?

Bu, büyük bir şirketin yaygın kullanılacak bir ürünü insan eli değmeden ürettiğini açıkça söylediği ender örneklerden biri. Yazılım mühendisliğinin ağırlık merkezi kod yazmaktan, doğruluğu ölçen testleri kurmaya kayıyor olabilir. Yazılımdaki ilk "böceğin" hikâyesi için [ilk bilgisayar böceği](/yazi/ilk-bilgisayar-bocegi-1947/) yazımıza bakın.
