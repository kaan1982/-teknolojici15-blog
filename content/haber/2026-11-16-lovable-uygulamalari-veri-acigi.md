---
title: "Yapay zekâyla yazılan Lovable uygulamaları pasaport ve 200 bin sohbeti açıkta bıraktı"
slug: "2026-11-16-lovable-uygulamalari-veri-acigi"
date: "2026-11-16"
rank: 1
topic: "yapay-zeka"
category: "Haber"
excerpt: "Alman güvenlik şirketi Crissy Field, Lovable ile yapılmış 24.664 sitenin veritabanını şifresiz okuyabildi; pasaport bilgileri ve 200 binden fazla sohbet açıktaydı."
hook: "Giriş yok, şifre yok, veri hazır"
fact: "24.664"
factLabel: "Girişsiz veri gönderen Lovable sitesi"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-16-lovable-uygulamalari-veri-acigi.webp"
readMin: 2
sources:
  - title: "Apps Built With Lovable Left Sensitive Data Exposed (Trending Topics)"
    url: "https://www.trendingtopics.eu/lovable-apps-sensitive-data-exposed/"
  - title: "Lovable AI apps exposed sensitive data in open databases (Cybernews)"
    url: "https://cybernews.com/security/lovable-ai-apps-expose-personal-information/"
---
Kod bilmeden, sadece yapay zekâya tarif ederek uygulama yapmayı vaat eden Lovable platformunda büyük bir güvenlik sorunu ortaya çıktı. Alman güvenlik şirketi Crissy Field, iş gazetesi Handelsblatt ile birlikte yürüttüğü araştırmada, Lovable ile yapılmış binlerce uygulamanın veritabanını hiçbir giriş yapmadan okuyabildiğini açıkladı.

## Rakamlar ne diyor?

Araştırmacılar, Common Crawl web arşivinde Aralık 2025 ile Eylül 2026 arasında yayında görünen 159.041 Lovable projesi buldu. Bunların 34.545'i Supabase adlı veritabanı hizmetini kullanıyordu ve 24.664'ü sayfa açılırken, kullanıcı girişi istemeden veritabanı kayıtları gönderiyordu. Ek okuma isteklerinde 7.403 sitede, 10.560 tabloda e-posta adresleri görüldü. Şirket bunun kesin bir sızıntı oranı olmadığını, bazı adreslerin herkese açık iletişim bilgisi ya da test verisi olabileceğini de not ediyor.

Açıkta kalanlar arasında bir hizmet sağlayıcısının 1.000'den fazla pasaport kaydı, bir Alman yaşam tarzı forumunun 80 binden fazla profili ve 200 binden fazla sohbet mesajı, etkinlik ve restoranların ödeme bilgisi içeren on binlerce siparişi ve geçerli bilet kodları var.

## Sorun nereden çıktı?

Ortada Lovable ya da Supabase'e yapılmış bir saldırı yok. Supabase'in tarayıcıya gönderdiği anahtar tasarım gereği herkese açık; koruma, veritabanındaki satır düzeyi güvenlik kurallarına bağlı. Bu kurallar eksik ya da gevşek olunca anahtarı gören herkes tabloları okuyabiliyor. Lovable ise yapay zekâsında bir kusur görmediğini, sorunun sektör genelinde bilinen bir yapılandırma meselesi olduğunu söylüyor ve kendi güvenlik tarama aracını hatırlatıyor. Verilerin kötüye kullanılıp kullanılmadığı bilinmiyor.

## Neden önemli?

Yapay zekâ uygulama yapmayı herkese açtı ama güvenliği otomatik getirmedi. Kod yazmayan kullanıcılar, gerçek müşteri verisi toplamadan önce erişim izinlerini bir uzmana kontrol ettirmeli. Güvenlik açıklarının bilgisayar tarihindeki ilk örneklerinden birini [ilk bilgisayar şifresi](/yazi/ilk-bilgisayar-sifresi-ctss/) yazımızda okuyabilirsiniz.
