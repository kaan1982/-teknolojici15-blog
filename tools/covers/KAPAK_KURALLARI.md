# Teknolojici15 blog kapakları (ajanlar için)

Amaç: Instagram Reels kapakları gibi dikkat çeken 9:16 (1080x1920) kapaklar. Her kapak tek bir HTML dosyası, ortak çerçeve tools/covers/base.css. Örnek: tools/covers/src/_ornek.html (kopyala, değiştir).

Kurallar
- <html lang="tr"> kullan (büyük harf İ/I doğru çıksın). Metni büyük harfle KENDİN yaz (text-transform'a güvenme).
- Üstte sabit: .cv__top (logo + TEKNOLOJİCİ15 wordmark solda, kırmızı kategori etiketi sağda: "TEKNOLOJİ TARİHİ", "YAPAY ZEKÂ" ya da "GÜNÜN HABERİ").
- Yapı (sırası serbest ama hepsi olsun): kicker (VT323, yıl · konu), dev başlık (2–3 satır, en çok ~10 kelime, biri vurgu renginde), ORİJİNAL SVG çizim (konunun nesnesi: cihaz, makine, nesne; çizgi/blok illüstrasyon), eğik bir damga (ŞAKA DEĞİL!, YANLIŞ BİLİYORSUN, TAHMİN ET!, NASIL YANİ? gibi; yazıyla çelişmesin), altta tek satır merak cümlesi (+ en fazla 1 emoji).
- Tema çeşitliliği: neon koyu, CRT yeşil/amber terminal, gazete/kâğıt (sepya, halftone), blueprint/teknik çizim, açık minimal (kırık beyaz + tek vurgu), synthwave, piksel art. Aynı ajan art arda aynı temayı kullanmasın.
- Dürüstlük: kapaktaki her rakam/iddia yazının içeriğiyle uyumlu olmalı (yazıyı oku). Yazının düzelttiği bir efsaneyi kapakta doğruymuş gibi söyleme.
- Gerçek şirket logoları, marka simgeleri, gerçek kişi portreleri YOK (Apple elması, YouTube oynat logosu, WhatsApp balonu, Claude/Anthropic logosu vb. çizme). Genel nesneler çiz.
- Taşma yok: render sonrası PNG'yi Read ile açıp kontrol et; yazı kesilmesin, çizimle çakışmasın.

Render: cd /home/claude/-teknolojici15-blog && NODE_PATH=$(npm root -g) node tools/covers/render.cjs <slug>
→ public/img/kapak/gen-<slug>.webp (ve inceleme için /tmp/cover-<slug>.png)
Sonra yazının frontmatter'ında cover alanını "/img/kapak/gen-<slug>.webp" yap (başka alanlara dokunma).
