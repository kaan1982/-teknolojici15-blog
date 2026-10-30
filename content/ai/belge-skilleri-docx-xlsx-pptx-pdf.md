---
title: "Belge skill'leri: Word, Excel, PowerPoint ve PDF'i ajana öğretmek"
slug: "belge-skilleri-docx-xlsx-pptx-pdf"
date: "2026-10-30"
year: 2026
yearLabel: "2026"
category: "Yapay Zekâ"
excerpt: "Anthropic'in docx, xlsx, pptx ve pdf skill'leri ne yapıyor, nerede çalışıyor? Belge üretimi için gerçekten işe yarayan resmî ve yardımcı skill'ler."
hook: "Rapor, tablo, sunum: hepsi bir skill"
fact: "4 BELGE"
factLabel: "Hazır gelen belge skill'i sayısı"
cover: "/img/kapak/gen-belge-skilleri-docx-xlsx-pptx-pdf.webp"
video: false
readMin: 5
sources:
  - title: "anthropics/skills (GitHub)"
    url: "https://github.com/anthropics/skills"
  - title: "Agent Skills: Overview (Claude Platform Docs)"
    url: "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview"
  - title: "Equipping agents for the real world with Agent Skills (Anthropic Engineering)"
    url: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
  - title: "What are skills? (Claude Help Center)"
    url: "https://support.claude.com/en/articles/12512176-what-are-skills"
---

Yapay zekâya "bana bir rapor hazırla" demek kolay. Zor olan, raporun gerçekten açılabilen, biçimi bozulmayan, formülleri çalışan bir Word ya da Excel dosyası olarak gelmesi. Skill'lerin ilk ve belki de en çok kullanılan kategorisi tam olarak bu: ofis belgeleri. Bu yazıda yalnızca var olduğunu doğruladığımız skill'leri ele alıyoruz.

## Dört temel taş: docx, xlsx, pptx, pdf

Claude belgelerine göre Anthropic'in hazır sunduğu (pre-built) dört belge skill'i var. Bunlar Claude'un dosya oluşturma özelliğinin arka planında çalışıyor ve Anthropic kaynak kodlarını anthropics/skills GitHub deposunda yayımlıyor.

| Skill | Ne yapar? (resmî açıklamalardan) |
|---|---|
| docx | Word belgeleri oluşturur, okur, düzenler. Biçimlendirme, şablonlar dahil |
| xlsx | Elektronik tablo açar, düzenler, formül ve grafik ekler, dağınık veriyi temizler |
| pptx | Sunum oluşturur, slayt düzenler, .pptx içeriğini okuyup ayrıştırır |
| pdf | Metin ve tablo çıkarır, PDF birleştirir, böler, form doldurur, filigran ekler |

Depodaki açıklamalar oldukça "ısrarcı" yazılmış. Örneğin pptx skill'inin açıklaması, bir .pptx dosyası girdi ya da çıktı olarak "herhangi bir şekilde" işin içindeyse kullanılmasını söylüyor. Bu, önceki yazıda anlattığımız "açıklama tetikler" kuralının resmî bir örneği.

## Nerede kullanabilirsin?

Ekim 2026 itibarıyla Claude belgelerine göre bu dört skill claude.ai'de belge oluştururken kendiliğinden devrede ve Claude API'de de hazır skill olarak çağrılabiliyor. Claude Code'da ise hazır belge skill'leri yerleşik olarak gelmiyor. Ama anthropics/skills deposu Claude Code için bir eklenti pazarı olarak eklenebiliyor ve document-skills paketi kurulabiliyor. Depodaki talimata göre önce /plugin marketplace add anthropics/skills komutuyla pazar eklenip ardından document-skills@anthropic-agent-skills kuruluyor.

Lisans konusunda bir ayrım var. Depodaki pek çok skill Apache 2.0 lisanslı açık kaynak. Ancak dört belge skill'i "açık kaynak değil, kaynağı erişilebilir" (source-available) olarak paylaşılmış. Yani kodu inceleyip öğrenebilirsin, ama kendi ürününde serbestçe yeniden dağıtmadan önce lisans dosyasını okuman gerekiyor.

> **Biliyor muydun?** pdf skill'i, aşamalı yüklemenin ders kitabı örneği. Anthropic'in mühendislik yazısına göre form doldurma talimatları ana SKILL.md'den çıkarılıp ayrı bir forms.md dosyasına taşındı. Claude bu dosyayı sadece gerçekten bir form doldururken okuyor. Depoda pdf klasörünün içinde bugün hem forms.md hem reference.md hem de bir scripts klasörü duruyor.

## Belgenin yanındaki yardımcılar

Belge üretimi sadece dosya biçimiyle bitmiyor. anthropics/skills deposunda içerik tarafına odaklanan başka resmî örnekler de var:

- **doc-coauthoring:** Teknik şartname, öneri, karar belgesi gibi yapılandırılmış metinleri birlikte yazmak için adım adım bir iş akışı sunuyor. Bağlamı aktarma, yinelemeli düzeltme ve doğrulama aşamalarından geçiriyor.
- **internal-comms:** Durum raporu, yönetim güncellemesi, şirket bülteni, SSS gibi iç iletişim metinlerini şirketin tercih ettiği biçimlerde yazmaya yardım eden kaynaklar topluyor. Klasörde örnek metinler de var.
- **brand-guidelines:** Anthropic'in resmî marka renklerini ve tipografisini bir çıktıya uyguluyor. Asıl değeri, kendi markan için benzerini nasıl kurabileceğini göstermesi.
- **theme-factory:** Slayt, belge, rapor ya da HTML sayfasına uygulanabilecek 10 hazır renk ve yazı tipi teması içeriyor, istersen anında yeni tema da üretiyor.

Yardım Merkezi ayrıca Notion, Figma ve Atlassian gibi iş ortaklarının kendi MCP bağlayıcılarıyla birlikte çalışacak şekilde hazırladığı skill'lerden söz ediyor. Bunlar belgelerin üretildiği araçlarla (ör. Notion sayfaları) çalışırken işe yarıyor.

## Gerçek hayatta nasıl kullanılır?

En verimli kullanım, hazır belge skill'lerini kendi küçük skill'inle birleştirmek. Örneğin xlsx skill'i Excel'in nasıl düzgün üretileceğini biliyor, ama senin şirketinin aylık satış tablosunda hangi sütunların olması gerektiğini bilmiyor. Bunu anlatan kısa bir skill yazarsan, iki skill birlikte çalışıp hem doğru biçimli hem de senin standardına uygun bir dosya ortaya çıkarıyor.

Unutmaman gereken iki not var. Birincisi, anthropics/skills deposu bu skill'lerin "gösterim ve eğitim amaçlı" olduğunu ve Claude'un kendi davranışının buradaki uygulamalardan farklı olabileceğini açıkça yazıyor. İkincisi, belge skill'leri kod çalıştırma ortamına ihtiyaç duyuyor. Yardım Merkezi'ne göre skill'lerin çalışması için kod çalıştırma özelliğinin açık olması gerekiyor.

Bir sonraki yazıda ekran tarafına geçiyoruz: tasarım, ön yüz ve web çıktıları üreten skill'ler.

Sen en çok hangi belge türünü hazırlarken zaman kaybediyorsun: tablo mu, sunum mu, rapor mu?
