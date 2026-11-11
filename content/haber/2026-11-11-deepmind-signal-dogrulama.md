---
title: "DeepMind'ın yapay zekâsı, Signal şifrelemesinin kodunu dört haftada matematikle doğruladı"
slug: "2026-11-11-deepmind-signal-dogrulama"
date: "2026-11-11"
rank: 2
topic: "yapay-zeka"
category: "Haber"
excerpt: "Google DeepMind'ın AlphaProof Code sistemi, Signal protokolünün gerçek kodundaki temel güvenlik özelliklerini makineyle denetlenen ispatlarla doğruladı."
hook: "Yıllık iş dört haftada"
fact: "6 milyon satır"
factLabel: "Lean dilinde yazılan ispat"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-11-deepmind-signal-dogrulama.webp"
readMin: 2
sources:
  - title: "Google DeepMind's AlphaProof Code Verifies Signal's Encryption (TUN)"
    url: "https://www.tun.com/home/google-deepminds-alphaproof-code-verifies-signals-encryption/"
  - title: "Google DeepMind's AI proves key Signal protocol guarantees in four weeks (Startup Fortune)"
    url: "https://startupfortune.com/google-deepminds-ai-proves-key-signal-protocol-guarantees-in-four-weeks/"
  - title: "Google DeepMind Says AI Formally Verified Signal's Protocol Code and Flagged Only 1% for a Human Look (Qodo)"
    url: "https://www.qodo.ai/blog/alphaproof-code-signal-formal-verification/"
---
Google DeepMind, 10 Kasım'da AlphaProof Code adlı yeni bir yapay zekâ sistemini tanıttı ve ilk büyük işini de açıkladı: Signal mesajlaşma protokolünün temel güvenlik özelliklerini "biçimsel doğrulama" ile kanıtlamak. Signal protokolü, Signal uygulamasının yanında değiştirilmiş hâlleriyle WhatsApp ve Google Messages'ta da kullanılıyor.

## Nasıl çalışıyor?

Biçimsel doğrulamada bir yazılımın belirli bir güvenlik kuralına her durumda uyduğu matematiksel olarak ispatlanır ve ispatı bir bilgisayar programı tek tek kontrol eder. Bu iş normalde uzman ekiplerin yıllarını alır.

AlphaProof Code'da önce insan kriptografi uzmanları neyin kanıtlanacağını yazdı. Örneğin bir cihaz kısa süre ele geçirilse bile sonraki mesajların korunması gibi. Ardından birlikte çalışan yapay zekâ ajanları ispatları Lean adlı biçimsel dilde üretti. Sonuç, altı milyonu aşan satırlık bir ispat oldu. Beş kişilik ekibin işi dört hafta sürdü. Ajanlar, kodun yalnızca yüzde 1'ini ikinci bir insan kontrolü için işaretledi.

Sistemin gerçekten ayırt edebildiğini göstermek için ekip, daha önce kapatılmış iki gerçek hatayı kodun yalıtılmış bir kopyasına geri koydu. AlphaProof Code her iki durumda da bu sürümlerin güvensiz olduğunu ispatladı.

## Sınırlar

Doğrulama Signal uygulamasının tamamını değil, protokolün seçilmiş güvenlik özelliklerini kapsıyor. İncelenen kısımlarda yeni bir açık bulunmadı. Bir ispat, ancak yazılan kurallar ve varsayımlar kadar güçlü; örneğin şifreleme algoritmalarının kusursuz olduğu varsayılıyor. DeepMind araştırmacısı Swarat Chaudhuri de yöntemin dünyadaki tüm yazılımlara yayılmasına daha çok uzun bir yol olduğunu söyledi. Google maliyeti açıklamadı; ispatlar ve kurallar açık kaynak olarak yayımlanıyor.

## Neden önemli?

Yapay zekâ, açık bulmakta saldırganlara da yardım ediyor. Aynı teknolojinin bir yazılımın güvenli olduğunu kanıtlamak için kullanılması, savunma tarafı için önemli bir adım. Bilgisayar güvenliğinin ilk günlerini merak ediyorsanız [ilk bilgisayar şifresinin](/yazi/ilk-bilgisayar-sifresi-ctss/) hikâyesine bakın.
