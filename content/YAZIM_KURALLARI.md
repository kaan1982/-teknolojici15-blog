# Teknolojici15 blog: yazım kuralları (tüm yazarlar)

Dil: Türkçe, samimi ama bilgili; Instagram hesabının sesi ("bunu bilmiyordun" merakı), ama blog olduğu için derin ve kaynaklı.
Uzunluk: 550–850 kelime. Kısa paragraflar (2–4 cümle). 3–5 adet "## " ara başlık. Başlık H1 YAZMA (frontmatter title kullanılır).
Yasaklar: em dash (—) ve en dash (–) KULLANMA; yerine nokta, virgül, iki nokta veya parantez. Uydurma alıntı, uydurma rakam yok. Her rakam/tarih web aramasıyla doğrulanmış olsun; emin olunamayan yerde bunu açıkça yaz ("kaynaklar farklı tarih veriyor" gibi). Tıklama tuzağı yok. Marka logosu/ürün iddiası yok.
Bir adet bilgi kutusu: satır başı "> **Biliyor muydun?** ..." şeklinde tek paragraf.
İsteğe bağlı bir adet "o zaman / şimdi" karşılaştırması: düz markdown tablo (2 sütun) en fazla 5 satır.
Son paragraf okuru yoruma/düşünmeye çağıran tek cümleyle bitsin (soru olabilir).

Dosya: content/posts/<slug>.md (AI bölümü için content/ai/<slug>.md). slug: ascii, küçük harf, tire ile (ör. ilk-e-posta-1971).
Frontmatter (YAML, tam bu alanlar):
---
title: "..."               # ≤ 70 karakter, merak uyandıran ama dürüst
slug: "..."
date: "YYYY-MM-DD"         # video paylaşım tarihi; yeni yazılar için 2026-10-30
year: 1971                 # olayın yılı (sayı) — zaman çizelgesi için; AI yazılarında 2026
yearLabel: "1971"
category: "..."            # şunlardan biri: İlkler | Bilgisayar | İnternet | Mobil | Oyun | İcatlar | Kripto | Yapay Zekâ
excerpt: "..."             # ≤ 160 karakter, meta description olarak da kullanılacak
hook: "..."                # ≤ 48 karakter, kartlardaki büyük vurucu cümle (video kapağındaki hook olabilir)
fact: "..."                # ≤ 14 karakter büyük rakam/etiket (ör. "30 TON", "4 KB", "1843")
factLabel: "..."           # ≤ 40 karakter, fact'in açıklaması
cover: "/img/kapak/<dosya>.jpg"   # verilmişse; yoksa ""
video: true                # bu konu @teknolojici15'te Reels olarak paylaşıldıysa true
readMin: 4                 # tahmini okuma dakikası
sources:
  - title: "..."
    url: "https://..."
---
(gövde markdown)

Kaynaklar: en az 2 güvenilir kaynak (Wikipedia + birincil/kurumsal kaynak tercih). URL'leri gerçekten açıp kontrol et.
