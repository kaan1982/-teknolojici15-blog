---
title: "Skill güvenliği: kurmadan önce okuman gereken her şey"
slug: "skill-guvenligi"
date: "2026-10-30"
year: 2026
yearLabel: "2026"
category: "Yapay Zekâ"
excerpt: "Skill'ler kod çalıştırabilir, dış kaynaklardan talimat çekebilir. Güvenilir kaynak, SKILL.md ve betik incelemesi, en az yetki ve gizli anahtarlar için rehber."
hook: "Skill kurmak, yazılım kurmaktır"
fact: "%13,4"
factLabel: "Kritik açıklı skill oranı (Snyk, 2026)"
cover: ""
video: false
readMin: 5
sources:
  - title: "Agent Skills: Overview, Security considerations (Claude Platform Docs)"
    url: "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview"
  - title: "Equipping agents for the real world with Agent Skills (Anthropic Engineering)"
    url: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
  - title: "ToxicSkills: Malicious AI agent skills (Snyk)"
    url: "https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub"
  - title: "Extend Claude with skills (Claude Code Docs)"
    url: "https://code.claude.com/docs/en/skills"
---

Skill'leri bu kadar güçlü yapan şey, aynı zamanda onları riskli yapan şey: bir skill sadece metin değil, çalıştırılabilir kod da taşıyabiliyor. Ajan o skill'i yüklediğinde, içindeki talimatları kendi talimatı gibi izliyor ve betiklerini çalıştırabiliyor. Bu yüzden Claude belgelerinin önerisi tek cümlede özetlenebilir: skill kurmayı yazılım kurmak gibi düşün.

## Resmî kaynaklar ne diyor?

Claude belgelerindeki güvenlik bölümü oldukça doğrudan. Skill'leri yalnızca güvenilir kaynaklardan, yani kendi yazdıklarından ya da Anthropic'ten aldıklarından kullanmanı öneriyor. Bilinmeyen bir kaynaktan skill kullanmak zorundaysan "son derece dikkatli" olmanı ve kullanmadan önce baştan sona denetlemeni istiyor.

Anthropic'in mühendislik yazısı da aynı çizgide: daha az güvenilen kaynaklardan gelen skill'lerde paketlenmiş dosyaları, özellikle kod bağımlılıklarını ve betikleri incelemeyi, ayrıca dış ağlara bağlanmayı söyleyen talimatları kontrol etmeyi öneriyor. Belgeler bir riski de özellikle vurguluyor: dış adreslerden veri çeken skill'ler tehlikeli, çünkü çekilen içerik kötü niyetli talimatlar barındırabilir.

## Sahada neler oluyor?

Bu uyarılar teorik değil. Güvenlik şirketi Snyk, 5 Şubat 2026'da yayımladığı "ToxicSkills" araştırmasında ClawHub ve skills.sh kaynaklı 3.984 skill'i taradı. Sonuçlar:

| Bulgu | Sayı |
|---|---|
| Taranan skill | 3.984 |
| En az bir güvenlik sorunu olan | 1.467 (yüzde 36,82) |
| En az bir kritik sorun içeren | 534 (yüzde 13,4) |
| Doğrulanmış kötü amaçlı yük | 76 |

Rapora göre skills.sh verisi yalnızca o sitenin seçilmiş ilk 100 skill'ini kapsıyor, tam pazar rakamları ise ClawHub için. Görülen saldırı türleri arasında kullanıcıyı güvenilmeyen yazılım indirip çalıştırmaya yönlendiren kurulum talimatları, kimlik bilgilerini saldırgana gönderen gizlenmiş (Base64 ya da Unicode ile kamufle edilmiş) komutlar, güvenlik kontrollerini kapatma ve arka kapı kurma girişimleri var. Doğrulanmış kötü amaçlı skill'lerin yüzde 91'inde istem enjeksiyonu (prompt injection) kullanılmış.

> **Biliyor muydun?** Claude Yardım Merkezi'ne göre Enterprise kuruluşlar, yüklenen skill'leri ve eklentileri kötü amaçlı içerik açısından kontrol eden skill taramasını açabiliyor. Ama bu bir güvenlik ağı, okumanın yerini tutmuyor. Bir skill'in ne yaptığını en iyi, kurmadan önce SKILL.md'sini ve betiklerini kendin açıp okuyarak anlarsın.

## Kurmadan önce kontrol listesi

Belgelerdeki önerilerden ve sahadaki bulgulardan çıkardığımız pratik bir liste:

1. **Kaynağı doğrula.** Depo kimin? Resmî bir şirket ya da tanınan bir geliştirici mi, yoksa adı bilinen bir pakete çok benzeyen (typosquatting) bir kopya mı?
2. **SKILL.md'yi baştan sona oku.** "Önce şunu indir ve çalıştır", "güvenlik ayarını kapat", "şu adrese gönder" gibi ifadeler alarm işaretidir.
3. **scripts/ klasörünü incele.** Okuyamadığın, gizlenmiş ya da Base64 ile kodlanmış satırlar varsa kurma.
4. **Dış bağlantıları kontrol et.** Skill bir web adresinden talimat ya da veri çekiyorsa, o içeriğin her an değişebileceğini unutma.
5. **İhtiyacın olanı kur.** "Hepsini kur" yerine tek tek skill seçmek hem bağlamı hem saldırı yüzeyini küçültür.

## En az yetki ve gizli anahtarlar

Skill'in nerede çalıştığı da önemli. Claude belgelerine göre Claude API ortamında skill'lerin ağ erişimi yok ve çalışma anında paket kuramıyorlar. claude.ai'de ağ erişimi kullanıcı ve yönetici ayarlarına göre tam, kısmi ya da kapalı olabiliyor. Claude Code'da ise skill'ler, bilgisayarındaki herhangi bir program kadar ağ erişimine sahip. Yani yerel ajanda kurduğun skill, senin yetkilerinle çalışıyor.

Bu yüzden en az yetki ilkesi kritik. Claude Code'da bir skill'in frontmatter'ındaki allowed-tools alanı, o skill çağrıldığında belirli araçların izin sormadan kullanılmasını sağlıyor. Belgelere göre bu izin bir sonraki mesajında sıfırlanıyor. Yine de başkasının yazdığı bir skill'de geniş izinler görürsen, bunu bilinçli olarak onaylamadan kurmamak iyi bir alışkanlık.

Gizli anahtarlar için kural basit: API anahtarlarını, şifreleri ve erişim belirteçlerini asla SKILL.md'ye ya da skill klasörüne yazma. Skill'i paylaştığında ya da bir depoya gönderdiğinde o klasördeki her şey de gider. Anahtarları ortam değişkenlerinde ya da kullandığın aracın güvenli kimlik bilgisi depolama yönteminde tut ve skill'e sadece onlara nasıl erişeceğini anlat.

Ekim 2026 itibarıyla skill ekosistemi çok hızlı büyüyor ve bu büyüme, uygulama mağazalarının ilk yıllarındaki güvenlik sorunlarını hatırlatıyor. İyi haber şu: bir skill'i okumak, bir uygulamanın kaynak kodunu okumaktan çok daha kolay, çünkü büyük kısmı düz metin.

Sen bir skill'i kurmadan önce içini açıp okuyor musun, yoksa yıldız sayısına ve indirme rakamına mı güveniyorsun?
