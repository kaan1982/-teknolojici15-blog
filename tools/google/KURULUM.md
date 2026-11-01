# Google Analytics 4 + AdSense kurulumu

Kimlikler `site.config.json` dosyasındadır. Boş olan özellik siteye hiç eklenmez.

- `ga4`: G-XXXXXXXXXX. Analytics > Yönetici > Veri akışları > web akışı > Ölçüm kimliği.
- `adsenseClient`: ca-pub-XXXXXXXXXXXXXXXX. AdSense > Hesap > Hesap bilgileri > Yayıncı kimliği.
- `adSlots.inArticle` / `afterArticle` / `newsList`: AdSense > Reklamlar > Reklam birimine göre > Görüntülü reklam (duyarlı) ile oluşturulan birimlerin `data-ad-slot` numaraları.

Kimlikler girilince build şunları kendiliğinden yapar:
- Her sayfaya `/js/g.js` (Consent Mode v2, olay ölçümü), gtag.js ve adsbygoogle.js.
- `ads.txt` (google.com, pub-..., DIRECT, f08c47fec0942fa0).
- `/gizlilik/` sayfası (9 dil) ve altbilgide "Gizlilik" + "Çerez ayarları" bağlantıları.
- Reklam alanları: yazının 2. paragrafından sonra, yazının sonunda (paylaşım ile sayfalama arasında), /haber/ listesinde ilk günden sonra. Hepsi "Reklam" etiketli. 404, gizlilik ve çevrilmemiş (noindex) sayfalarda reklam yok.

Ölçülen özel olaylar (GA4 > Yönetici > Özel tanımlar ile parametreleri kaydet):
read_progress (percent), read_complete, source_click, share (method), language_switch (to_language), deck_nav, pager_click, select_content, instagram_click, ad_slot_view (slot_name). Sayfa başına content_group = home / news / post / ai / news_index / ai_hub / privacy.

AdSense hesabında: Gizlilik ve mesajlaşma > Avrupa düzenlemeleri (GDPR) mesajını oluştur ve yayınla (AEA/BK/İsviçre için zorunlu onay penceresi). Site AdSense'e kendi kök alan adıyla eklenmeli; *.vercel.app kabul edilmez.
