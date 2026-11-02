# Haber masası: günün 3 haberi (her sabah)

Ana sayfadaki TV (TEKNO-TEKST) ve /haber/ sayfası `content/haber/` klasöründen beslenir.
Ana sayfa en yeni tarihli haberlerden `rank` 1, 2 ve 3 olanları gösterir. `topic: "yapay-zeka"` olan haberler ayrıca ana sayfadaki "Yapay zekâ vitrini"nde kapaklarıyla öne çıkar ve her yerde YAPAY ZEKÂ rozeti alır.

## Seçim
- Son ~36 saatte teknoloji / yapay zekâ dünyasından en önemli 3 gelişme. En az 1, tercihen 2 tanesi yapay zekâ olsun; en az 1 tanesi yapay zekâ dışı bir teknoloji alanından gelsin (çip, güvenlik, uzay, mobil, internet, kripto vb.). İki haber aynı alt alandan olmasın (iki bilanço ya da iki model duyurusu yapma).
- Her haber en az 2 bağımsız, açılıp doğrulanmış kaynağa dayansın. Açamadığın kaynağı listeye koyma.
- Rakamlar kaynaklarda farklıysa aralık ver ("482 ile 496 milyar dolar arasında"). Uydurma alıntı yok; söylenen sözü başka sözcüklerle aktar.
- Söylenti, sızıntı, tek kaynaklı iddia haber değildir.

## Dosya: content/haber/YYYY-MM-DD-<kisa-slug>.md
```
---
title: "..."            # ≤ 90 karakter, Türkçe, tıklama tuzağı değil
slug: "YYYY-MM-DD-<kisa-slug>"
date: "YYYY-MM-DD"      # yayın günü (İstanbul)
rank: 1                 # 1, 2 ya da 3
topic: "yapay-zeka"     # SADECE yapay zekâ haberlerinde; diğerlerinde bu satırı hiç yazma
category: "Haber"
excerpt: "..."          # 1 cümle, ≤ 170 karakter
hook: "..."             # ≤ 40 karakter
fact: "..."             # tek büyük rakam/olgu, ≤ 16 karakter
factLabel: "..."        # rakamın açıklaması, ≤ 40 karakter
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-<slug>.webp"
readMin: 2
sources:
  - title: "Başlık (Yayın)"
    url: "https://..."
---
```
Gövde 220–350 kelime, kısa paragraflar, em/en tire yok (— –). Sonda "Neden önemli?" paragrafı.
Mümkünse blogdaki bir tarih yazısına bir iç bağlantı ver (/yazi/<slug>/).

## Kapak
tools/covers/KAPAK_KURALLARI.md'ye uy; etiket "GÜNÜN HABERİ". Üç kapak birbirinden ve bir önceki günün kapaklarından farklı temada olsun. Yapay zekâ haberlerinin kapakları vitrinde tam boy (9:16) görünür: çizim güçlü ve okunaklı olsun. Gerçek logo yok.
Render: `NODE_PATH=$(npm root -g) node tools/covers/render.cjs <slug>` ve PNG'yi açıp kontrol et.

## Yayın
`npm ci && node build.mjs` hatasız bitsin. Commit: "Günün haberleri: YYYY-MM-DD", main'e push. Vercel otomatik yayınlar.
Eski haberler silinmez; /haber/ arşivi gün gün listeler.
