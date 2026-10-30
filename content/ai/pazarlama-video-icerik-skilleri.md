---
title: "Pazarlama, video ve içerik skill'leri: üreticinin araç çantası"
slug: "pazarlama-video-icerik-skilleri"
date: "2026-10-30"
year: 2026
yearLabel: "2026"
category: "Yapay Zekâ"
excerpt: "Corey Haines'in marketingskills deposu, Anthropic'in marketing eklentisi, Remotion ve HeyGen HyperFrames skill'leri. İçerik ve video için gerçek seçkiler."
hook: "Videoyu kodla, metni skill'le yaz"
fact: "52 SKILL"
factLabel: "marketingskills deposundaki skill sayısı"
cover: "/img/kapak/gen-pazarlama-video-icerik-skilleri.webp"
video: false
readMin: 5
sources:
  - title: "coreyhaines31/marketingskills (GitHub)"
    url: "https://github.com/coreyhaines31/marketingskills"
  - title: "anthropics/knowledge-work-plugins (GitHub)"
    url: "https://github.com/anthropics/knowledge-work-plugins"
  - title: "remotion-dev/skills (GitHub)"
    url: "https://github.com/remotion-dev/skills"
  - title: "heygen-com/hyperframes (GitHub)"
    url: "https://github.com/heygen-com/hyperframes"
---

Bu blogun arkasında da her gün kısa videolar, kapaklar ve metinler üretiliyor. O yüzden bu kategori bizim için biraz kişisel: pazarlama, içerik ve video üreten skill'ler. Burası aynı zamanda topluluk skill'lerinin en hızlı çoğaldığı alan. Biz de yalnızca depolarını açıp içini kontrol ettiğimiz örnekleri listeledik. Tüm sayılar Ekim 2026 sonu itibarıyla.

## marketingskills: 52 skill'lik pazarlama kütüphanesi

Dönüşüm optimizasyonu ajansı Conversion Factory'nin arkasındaki isim Corey Haines'in MIT lisanslı coreyhaines31/marketingskills deposu, bu alandaki en kapsamlı topluluk koleksiyonlarından biri. README'ye göre teknik pazarlamacılar ve kurucular için hazırlanmış; dönüşüm optimizasyonu, metin yazarlığı, SEO, analitik ve büyüme mühendisliği gibi işlere odaklanıyor. Claude Code, OpenAI Codex, Cursor ve Agent Skills standardını destekleyen diğer ajanlarla çalıştığını belirtiyor.

Depodaki skills klasöründe 52 skill var. Birkaç örnek:

- **copywriting:** Ana sayfa, açılış sayfası, fiyatlandırma sayfası gibi her türlü pazarlama sayfasının metnini yazmak ya da iyileştirmek için.
- **seo-audit:** Bir sitedeki SEO sorunlarını denetlemek ve teşhis etmek için.
- **ai-seo:** İçeriği yapay zekâ arama motorları için optimize etmek, yani büyük dil modellerinin cevaplarında kaynak olarak gösterilmek için.
- **emails ve cold-email:** E-posta dizileri, otomatik akışlar ve B2B soğuk e-posta kampanyaları için.
- **social:** LinkedIn, X, Instagram, TikTok ve Facebook için içerik oluşturmak ve planlamak için.

Kurulum için README, npx skills add coreyhaines31/marketingskills komutunu öneriyor. Tek tek skill de seçilebiliyor.

## Anthropic'in marketing eklentisi

Anthropic'in anthropics/knowledge-work-plugins deposu, meslek gruplarına göre hazırlanmış eklentiler topluyor. Bunlar Claude Cowork için yapılmış, Claude Code ile de uyumlu. Her eklenti o iş için skill'leri, bağlayıcıları, eğik çizgi komutlarını ve alt ajanları bir arada paketliyor.

marketing eklentisinin içindeki skill'ler şunlar: brand-review (taslağı marka sesine ve stil rehberine göre denetleyip önce/sonra düzeltmeleri öneriyor), campaign-plan (hedef, kitle, mesaj, kanal stratejisi ve içerik takvimiyle kampanya özeti çıkarıyor), content-creation, draft-content, email-sequence, competitive-brief, performance-report ve seo-audit. README bu eklentinin Slack, Canva, Figma, HubSpot ve Ahrefs gibi araçlara bağlanabildiğini listeliyor. Yani burada skill "yöntemi", bağlayıcı ise "erişimi" sağlıyor.

> **Biliyor muydun?** Videolar artık bir zaman çizelgesinde sürükle bırak ile değil, kodla da üretilebiliyor ve skill'ler tam bu noktada devreye giriyor. Remotion ekibi, React tabanlı video çerçevesi için kendi resmî skill setini yayımlıyor. HeyGen ise "HTML yaz, video render et" fikrine dayanan HyperFrames'i ajanlar için skill'lerle birlikte sunuyor.

## Video için: Remotion ve HyperFrames

| Paket | Kaynak | Ne sunar? |
|---|---|---|
| remotion-dev/skills | Remotion ekibi (resmî) | 12 skill: video oluşturma, animasyon kuralları, altyazı, render, önizleme |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | HTML'i videoya çeviren çerçeve için skill'ler ve hazır bloklar |

**Remotion:** README'ye göre Remotion, Remotion projelerinde çalışmanın en iyi uygulamalarını tanımlayan bir Agent Skills listesi tutuyor. Setin içinde yeni video oluşturan remotion-create, animasyon ve yerleşim bilgisini taşıyan remotion-markup, altyazı yazıya dökme ve animasyonu için remotion-captions, dışa aktarma için remotion-render ve hepsine yönlendiren remotion-best-practices gibi skill'ler var. Kurulum npx skills add remotion-dev/skills ile yapılıyor.

**HyperFrames:** HeyGen'in deposu kendini "HTML yaz, video render et, ajanlar için yapıldı" diye tanıtıyor. README'ye göre temel set hyperframes (video yapma ve düzenleme), hyperframes-cli (proje iskeleti, önizleme, render), hyperframes-registry (yaklaşık 450 hazır geçiş, başlık, altyazı ve grafik bloğu) ve media-use (müzik, ses efekti, görsel, seslendirme gibi medya işleri) skill'lerinden oluşuyor. Toplamda 7 yayımlanmış skill var.

İlginç bir ayrıntı: Corey Haines'in deposundaki video skill'inin açıklaması da Remotion, HyperFrames ve HeyGen gibi isimleri tetikleyici kelimeler olarak listeliyor. Yani pazarlama skill'i, video skill'lerine bir köprü gibi çalışmak üzere yazılmış.

## Seçerken nelere bakmalı?

Bu alandaki skill'lerin çoğu topluluk ya da şirket kaynaklı ve çok hızlı güncelleniyor. Bir paketi kurmadan önce şu üç soruyu sormak işini kolaylaştırır: Depo kimin, aktif olarak güncelleniyor mu? SKILL.md içinde dış adreslere bağlanan ya da kimlik bilgisi isteyen bir talimat var mı? Gerçekten ihtiyacın olan birkaç skill'i seçip kurabiliyor musun? Kurulum araçlarının çoğu "hepsini kur" yerine tek skill seçmeye izin veriyor ve bu hem bağlamı hem riski küçültüyor.

İçerik üretiminde senin için en büyük zaman hırsızı hangisi: metin yazmak mı, görsel hazırlamak mı, yoksa videoyu kurgulamak mı?
