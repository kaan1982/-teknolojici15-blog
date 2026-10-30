---
title: "Kendi skill'ini yaz: SKILL.md ile adım adım ilk beceri"
slug: "kendi-skillini-yaz"
date: "2026-10-30"
year: 2026
yearLabel: "2026"
category: "Yapay Zekâ"
excerpt: "Bir klasör, bir SKILL.md ve iyi yazılmış bir açıklama. Kendi Agent Skill'ini yazmanın adımları, description alanının önemi ve test yöntemi."
hook: "Skill'i açıklaması tetikler"
fact: "1.024"
factLabel: "description alanı için azami karakter"
cover: "/img/kapak/gen-kendi-skillini-yaz.webp"
video: false
readMin: 5
sources:
  - title: "Agent Skills Specification (agentskills.io)"
    url: "https://agentskills.io/specification"
  - title: "Optimizing skill descriptions (agentskills.io)"
    url: "https://agentskills.io/skill-creation/optimizing-descriptions"
  - title: "Skill authoring best practices (Claude Platform Docs)"
    url: "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices"
  - title: "Extend Claude with skills (Claude Code Docs)"
    url: "https://code.claude.com/docs/en/skills"
---

Bir skill yazmak için programcı olmana gerek yok. En basit hâliyle bir klasör ve içinde tek bir metin dosyası yeterli. Ama iyi çalışan bir skill ile hiç tetiklenmeyen bir skill arasındaki fark, çoğu zaman tek bir cümlede saklı: açıklama. Bu yazıda sıfırdan küçük ama gerçek bir skill yazıyoruz.

## Adım 1: Klasörü ve SKILL.md'yi oluştur

Agent Skills spesifikasyonuna göre bir skill, en az bir SKILL.md dosyası içeren bir klasör. Dosyanın en başında YAML ön bilgisi (frontmatter) yer alıyor ve iki alan zorunlu:

- **name:** En fazla 64 karakter. Sadece küçük harf, rakam ve tire. Tireyle başlayıp bitemez, art arda iki tire içeremez ve klasörün adıyla aynı olmalı. Claude belgeleri ayrıca "anthropic" ve "claude" kelimelerinin ad içinde kullanılamayacağını belirtiyor.
- **description:** Boş olamaz, en fazla 1.024 karakter. Skill'in ne yaptığını ve ne zaman kullanılacağını anlatmalı.

İsteğe bağlı alanlar da var (license, compatibility, metadata ve deneysel allowed-tools), ama çoğu skill için gerekmiyor.

## Adım 2: Açıklamayı özenle yaz

Neden açıklama bu kadar önemli? Çünkü ajan açılışta her skill'in yalnızca adını ve açıklamasını okuyor. agentskills.io'nun ifadesiyle tetiklenmenin "tüm yükü" açıklamanın sırtında. Açıklama işin ne zaman işe yarayacağını anlatmıyorsa, ajan o skill'e uzanmıyor.

Kaynakların önerileri şöyle özetlenebilir:

- Hem **ne yaptığını** hem **ne zaman kullanılacağını** yaz.
- Claude belgeleri açıklamanın sistem istemine eklendiği için **üçüncü şahısla** yazılmasını öneriyor ("Excel dosyalarını işler", "Sana yardım edebilirim" değil).
- agentskills.io, kullanıcının o alanı adıyla anmadığı durumları da açıkça listelemeyi öneriyor.
- Kısa tut: birkaç cümle, en fazla kısa bir paragraf. Claude Code, listede açıklamayı 1.536 karakterde kesiyor, bu yüzden en önemli kullanım durumu başta olmalı.

## Adım 3: Gövdeyi kısa, betiği akıllı tut

Örnek olarak bu blogun kendi yazım kuralına uygun bir skill düşünelim: metinde uzun tire (em dash) ve orta tire (en dash) kalmasın. Klasör yapısı şöyle olsun:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

SKILL.md dosyası ise şu kadar:

```markdown
---
name: tire-denetimi
description: Türkçe blog yazılarında uzun tire (U+2014) ve orta tire (U+2013) kullanımını bulur ve düzeltme önerir. Kullanıcı bir Markdown yazısını yayına hazırlarken, "tireleri kontrol et", "yazım kurallarına uyuyor mu" dediğinde ya da adını anmasa da yayın öncesi son kontrol istediğinde kullanılır.
---

# Tire denetimi

1. `python scripts/tire_bul.py <dosya.md>` komutunu çalıştır.
2. Çıktıdaki her satır için tireyi nokta, virgül, iki nokta veya parantezle değiştirmeyi öner.
3. Anlamı değiştirme. Emin olmadığın satırları kullanıcıya sor.
4. Sonunda kaç satır düzelttiğini tek cümleyle bildir.
```

Claude belgeleri bağlam penceresini "ortak bir kaynak" olarak görüyor ve yalnızca modelin zaten bilmediği bilgiyi eklemeyi öneriyor. Gövde 500 satırın altında kalmalı. Uzun başvuru metinleri ayrı dosyalara taşınmalı ve bu dosyalara SKILL.md'den tek seviyede bağlantı verilmeli.

Betikler için kural da net: "çöz, topu atma". Yani betik hata durumlarını kendisi ele almalı, "patlasın, Claude bir yolunu bulur" mantığıyla yazılmamalı. Betik çalıştığında bağlama kodun kendisi değil, yalnızca çıktısı giriyor. Bu da tekrarlanan ve hata kaldırmayan işler için betiği talimattan daha güvenilir kılıyor.

> **Biliyor muydun?** Claude Code'da eski "özel eğik çizgi komutları" skill'lerle birleşti. .claude/commands/deploy.md dosyası ile .claude/skills/deploy/SKILL.md aynı /deploy komutunu oluşturuyor. Bir skill'in otomatik tetiklenmesini istemiyorsan frontmatter'a disable-model-invocation: true ekleyip onu sadece elle çağırabilirsin.

## Adım 4: Test et, sonra yine test et

Claude'un en iyi uygulamalar rehberi, uzun belge yazmadan önce değerlendirme senaryoları hazırlamayı öneriyor ve yayın öncesi kontrol listesinde en az üç değerlendirme ile Haiku, Sonnet ve Opus modellerinde ayrı ayrı test yer alıyor. Gerekçe basit: Opus'ta kusursuz çalışan bir talimat, Haiku için daha fazla ayrıntı isteyebilir.

Tetiklenmeyi test etmek için agentskills.io'nun önerisi somut: yaklaşık 20 örnek kullanıcı mesajı hazırla. Bunların 8 ila 10'u skill'i tetiklemeli, 8 ila 10'u tetiklememeli. En değerli olumsuz örnekler "kıl payı ıskalar", yani aynı kelimeleri paylaşan ama başka bir iş isteyen mesajlar. Model davranışı her seferinde aynı olmadığı için her mesajı birkaç kez (başlangıç için 3) çalıştırıp tetiklenme oranına bakmak öneriliyor.

| Kötü açıklama | İyi açıklama |
|---|---|
| "PDF'lerle yardımcı olur." | Ne yaptığını ve ne zaman kullanılacağını söyler |
| Sadece teknik ayrıntı | Kullanıcının niyetini anlatır |
| Her şeyi kapsar | Neyi yapmadığını da belirtir |

Kurulum da basit: Claude Code'da klasörü ~/.claude/skills/ altına (kişisel) ya da projenin .claude/skills/ klasörüne koyman yeterli. Claude Code bu klasörleri izliyor ve değişiklikleri yeniden başlatma gerekmeden aynı oturumda algılıyor. claude.ai'de ise skill'i zip olarak ayarlardan yükleyebiliyorsun.

Senin ilk skill'in hangi tekrarlayan işini otomatikleştirirdi?
