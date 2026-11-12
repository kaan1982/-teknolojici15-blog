---
title: "DeepMind'ın AlphaGenome 2'si DNA'yı artık hücre hücre okuyor"
slug: "2026-11-12-alphagenome-2-hucre-dna"
date: "2026-11-12"
rank: 1
topic: "yapay-zeka"
category: "Haber"
excerpt: "DeepMind'ın AlphaGenome 2 modeli, bir DNA değişikliğinin hangi hücrede ne yaptığını tahmin ediyor ve nedensel varyantları neredeyse iki kat daha çok buluyor."
hook: "Aynı DNA, farklı hücre"
fact: "%30"
factLabel: "Bulunan nedensel varyant oranı"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-12-alphagenome-2-hucre-dna.webp"
readMin: 2
sources:
  - title: "AlphaGenome 2 finds nearly 2x more disease-linked DNA variants (Interesting Engineering)"
    url: "https://interestingengineering.com/ai-robotics/deepmind-alphagenome-2-causal-dna-variants"
  - title: "Google DeepMind's AlphaGenome 2 Predicts Cell-State Variant Effects (Unite.AI)"
    url: "https://www.unite.ai/google-deepminds-alphagenome-2-predicts-cell-state-variant-effects/"
---
Google DeepMind, 11 Kasım'da AlphaGenome 2'yi tanıttı. Bu yapay zekâ modeli, DNA'daki küçük bir değişikliğin (varyantın) genlerin çalışmasını nasıl etkilediğini tahmin ediyor. Yenilik şu: model artık tüm dokunun ortalamasına değil, tek tek hücre türlerine ve hücrenin o anki durumuna bakıyor.

## Ne değişti?

Vücudumuzdaki her hücre aynı DNA'yı taşır ama her hücre onu farklı okur. İlk AlphaGenome, dokular için sabit tahminler üretiyordu. AlphaGenome 2 ise bir DNA dizisinin yanında "hangi hücre, hangi durumda" bilgisini de alıyor. Araştırmacılar hazır bir hücre kataloğundan seçim yapabiliyor ya da kendi tek hücre verilerini verebiliyor.

Model, insan ve fareden alınmış, 68 dokuya yayılan 100 milyonu aşkın tek hücre profiliyle eğitildi. Kaynaklar bu sayıyı 107 milyonun üzerinde veriyor.

## Sonuçlar

28 bağışıklık hücresi türünü kapsayan TenK10K testinde AlphaGenome 2, nedensel varyantların yüzde 30'unu buldu. İlk model ve diğer özel araçlar yüzde 16'da kalmıştı. Varyantın gen etkinliğini artırıp azalttığını doğru tahmin etme oranı da yüzde 23'ten yüzde 43'e çıktı.

Örneklerden birinde model, ağır COVID-19 ile ilişkili bir varyantın etkin T hücrelerinde dinlenen hücrelere göre daha güçlü olduğunu gösterdi.

## Sınırlar

Model, ticari olmayan araştırmalar için ücretsiz bir API üzerinden sunuluyor; şirketler için özel önizleme var. DeepMind, modelin klinik ya da teşhis amaçlı doğrulanmadığını vurguluyor. Model hâlâ nedensel varyantların ancak bir azınlığını yakalıyor ve tahminlerin laboratuvarda doğrulanması gerekiyor.

## Neden önemli?

Hastalıklarla ilişkili DNA değişikliklerinin çoğu genlerin dışında, genleri açıp kapatan bölgelerde bulunur ve etkileri yalnızca belirli hücrelerde ortaya çıkar. Hangi değişikliğin hangi hücrede sorun yarattığını önceden tahmin edebilmek, ilaç hedeflerini bulmayı ve deney sayısını azaltmayı kolaylaştırabilir.
