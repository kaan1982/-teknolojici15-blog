---
title: "Skill nedir? Yapay zekâ ajanlarının yeni 'beceri klasörleri'"
slug: "skill-nedir"
date: "2026-10-30"
year: 2026
yearLabel: "2026"
category: "Yapay Zekâ"
excerpt: "Agent Skill, SKILL.md dosyası ve isteğe bağlı betiklerden oluşan bir klasör. Ajan onu yalnızca gerektiğinde yükler. Prompt, MCP ve eklentiden farkı ne?"
hook: "Ajana bir klasörle yeni beceri öğret"
fact: "3 KATMAN"
factLabel: "Skill içeriğinin aşamalı yüklenmesi"
cover: "/img/kapak/gen-skill-nedir.webp"
video: false
readMin: 5
sources:
  - title: "Agent Skills: Overview (Claude Platform Docs)"
    url: "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview"
  - title: "Equipping agents for the real world with Agent Skills (Anthropic Engineering)"
    url: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
  - title: "What are skills? (Claude Help Center)"
    url: "https://support.claude.com/en/articles/12512176-what-are-skills"
  - title: "Agent Skills Specification (agentskills.io)"
    url: "https://agentskills.io/specification"
---

Yapay zekâ asistanları her şeyi biraz biliyor, ama senin şirketinin rapor şablonunu, markanın renklerini ya da bir dosya türünü düzgün işlemenin püf noktalarını bilmiyor. Bunu her sohbette uzun uzun anlatmak yerine bir kez paketleyip ajana "gerektiğinde kullan" diyebilseydin? İşte "skill" (beceri) tam olarak bu fikir.

## Kısaca: bir klasör ve bir SKILL.md

Anthropic'in tanımıyla Agent Skills, Claude'un yeteneklerini genişleten modüler paketler. Her skill; talimatları, meta veriyi ve isteğe bağlı kaynakları (betikler, şablonlar) bir arada tutar ve Claude bunları ilgili olduğunda kendiliğinden kullanır. Anthropic'in mühendislik blogu bunu daha da sade söylüyor: skill'ler, ajanın belirli işlerde daha iyi olmak için ihtiyaç anında yüklediği "düzenlenmiş talimat, betik ve kaynak klasörleri".

Teknik olarak bir skill, en azından içinde SKILL.md adlı bir dosya bulunan bir klasör. Bu dosyanın başında YAML formatında iki zorunlu alan var: name (ad) ve description (açıklama). Altında ise düz Markdown ile yazılmış talimatlar yer alıyor. Klasöre istersen scripts/ (çalıştırılabilir kod), references/ (ek belgeler) ve assets/ (şablon, görsel, veri) gibi alt klasörler ekleyebilirsin.

Anthropic bu yapıyı yeni bir çalışana hazırlanan işe alışma rehberine benzetiyor. Rehberi masaya bırakırsın, çalışan ihtiyacı olduğunda açıp bakar.

## Sırrı: her şey bir anda yüklenmiyor

Skill'leri sıradan bir uzun prompt'tan ayıran şey "aşamalı yükleme" (progressive disclosure) denen tasarım. Claude belgelerine göre içerik üç katmanda yükleniyor:

| Katman | Ne zaman yüklenir? |
|---|---|
| 1. Meta veri (ad + açıklama) | Her zaman, açılışta (skill başına yaklaşık 100 token) |
| 2. SKILL.md gövdesi | Skill tetiklendiğinde (5.000 token altı öneriliyor) |
| 3. Ek dosyalar ve betikler | Yalnızca gerektiğinde; betiklerin sadece çıktısı bağlama girer |

Bu sayede ajana onlarca skill yükleyebilirsin ama hepsi bağlam penceresini doldurmaz. Tetiklenene kadar her skill'den yalnızca adı ve açıklaması "masada" durur. Belgedeki örnekte PDF skill'i form doldurma talimatlarını ayrı bir forms.md dosyasında tutuyor ve Claude bu dosyayı sadece gerçekten form doldururken okuyor.

> **Biliyor muydun?** Anthropic, Agent Skills'i 16 Ekim 2025'te duyurdu ve 18 Aralık 2025'te formatı agentskills.io adresinde açık bir standart olarak yayımladı. Bu yüzden Ekim 2026 itibarıyla aynı SKILL.md yapısını GitHub Copilot ve OpenAI Codex gibi başka araçların belgelerinde de görüyorsun. Copilot'un belgeleri skill'leri kontrol etmek için doğrudan agentskills.io spesifikasyonuna yönlendiriyor.

## Prompt, MCP, eklenti: farkları ne?

Bu kavramlar sık karıştırılıyor, çünkü hepsi "ajanı daha iyi yapma" ile ilgili. Claude Yardım Merkezi'nin ayrımı şöyle özetlenebilir:

- **Prompt veya özel talimatlar:** Her sohbette ya da tüm sohbetlerinde geçerli genel yönlendirmeler. Skill ise göreve özel ve yalnızca ilgili olduğunda devreye giriyor.
- **Projeler:** Bir proje içindeki sohbetlerde her zaman yüklü duran sabit arka plan bilgisi. Skill ise gerektiğinde açılan bir prosedür.
- **MCP (Model Context Protocol) bağlayıcıları:** Claude'u dış hizmetlere ve veri kaynaklarına bağlar. Yani "erişim" sağlar. Skill ise o erişimi nasıl kullanacağını anlatan "yöntem bilgisi". Yardım merkezi ikisinin sıklıkla birlikte kullanıldığını söylüyor.
- **Eklentiler (plugin):** Claude Code ve Cowork tarafında eklenti, birden fazla parçayı (skill'ler, bağlayıcılar, komutlar, alt ajanlar) birlikte dağıtmanın paketi. OpenAI'ın belgeleri de benzer bir ayrım yapıyor: skill yazım formatı, eklenti ise dağıtım biçimi.

Kısacası MCP ajana el verir, skill o ele beceri öğretir, eklenti de bunları bir kutuda teslim eder.

## Nerede çalışıyor?

Ekim 2026 itibarıyla Claude belgelerine göre skill'ler Claude uygulamalarında (claude.ai), Claude Code'da ve kod çalıştırma aracıyla birlikte Claude API'de kullanılabiliyor. Yardım merkezi skill'lerin Free, Pro, Max, Team ve Enterprise planlarında sunulduğunu ve kod çalıştırma özelliğinin açık olmasını gerektirdiğini belirtiyor.

Önemli bir ayrıntı: özel skill'ler yüzeyler arasında senkronize olmuyor. claude.ai'ye yüklediğin skill sadece senin hesabına özel. API'ye yüklenen skill çalışma alanının tamamıyla paylaşılıyor. Claude Code'da ise kişisel (~/.claude/skills/) ya da proje klasöründe (.claude/skills/) tutuluyor.

Bir de güvenlik boyutu var. Skill'ler kod çalıştırabildiği için belgeler onları "yazılım kurmak gibi" ele almayı ve yalnızca güvenilir kaynaklardan kullanmayı öneriyor. Bunu serinin son yazısında ayrıca ele alıyoruz.

Bu bölümün sonraki yazılarında kendi skill'ini adım adım yazmayı ve gerçekten var olan, işe yarayan skill'leri kategori kategori inceleyeceğiz.

Senin her gün yapay zekâya tekrar tekrar anlattığın, "keşke bunu bir kez öğretsem" dediğin iş hangisi?
