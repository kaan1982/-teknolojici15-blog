---
title: "Geliştiriciler için skill'ler: skill-creator, mcp-builder ve fazlası"
slug: "gelistirici-skilleri-skill-creator-mcp-builder"
date: "2026-10-30"
year: 2026
yearLabel: "2026"
category: "Yapay Zekâ"
excerpt: "Skill yazan skill, MCP sunucusu kuran skill, test ve hata ayıklama disiplini getiren skill paketleri. Geliştiriciler için doğrulanmış seçkiler."
hook: "Skill yazan bir skill var"
fact: "20 SORGU"
factLabel: "Tetiklenme testi için önerilen örnek"
cover: ""
video: false
readMin: 5
sources:
  - title: "anthropics/skills (GitHub)"
    url: "https://github.com/anthropics/skills"
  - title: "Optimizing skill descriptions (agentskills.io)"
    url: "https://agentskills.io/skill-creation/optimizing-descriptions"
  - title: "obra/superpowers (GitHub)"
    url: "https://github.com/obra/superpowers"
  - title: "Build skills (OpenAI / ChatGPT ve Codex belgeleri)"
    url: "https://learn.chatgpt.com/docs/build-skills"
---

Yazılım geliştiren biri için skill'ler iki açıdan ilginç. Birincisi, kendi skill'lerini daha hızlı ve ölçülebilir şekilde yazmana yardım eden "üretici" skill'ler var. İkincisi, ajana mühendislik disiplini (test, plan, hata ayıklama) kazandıran paketler var. Bu yazıda ikisini de, sadece var olduğunu doğruladığımız örneklerle ele alıyoruz.

## skill-creator: skill yazan skill

Anthropic'in resmî anthropics/skills deposundaki skill-creator, yeni skill oluşturmak, mevcut skill'leri düzenleyip iyileştirmek ve performanslarını ölçmek için tasarlanmış. Açıklamasına göre değerlendirme (eval) çalıştırma, sonuçları varyans analiziyle kıyaslama ve skill açıklamasını daha iyi tetiklenecek şekilde optimize etme işlerini de üstleniyor.

İş akışı oldukça insani anlatılmış: ne istediğine karar ver, taslak yaz, birkaç test mesajı hazırla, skill'li Claude'u bu mesajlarla çalıştır, sonuçları birlikte değerlendir, yeniden yaz, tekrarla. Klasörde değerlendirme çalıştıran, kıyaslama raporu üreten ve açıklamayı iyileştiren ayrı betikler, ayrıca sonuçları görsel olarak incelemek için bir "eval-viewer" bulunuyor.

agentskills.io'nun açıklama optimizasyonu rehberi de bu skill'i örnek gösteriyor. Rehbere göre skill-creator bu döngüyü baştan sona otomatikleştiriyor: test kümesini bölüyor, tetiklenme oranlarını paralel ölçüyor, Claude ile açıklama iyileştirmeleri öneriyor ve canlı bir HTML raporu üretiyor.

> **Biliyor muydun?** agentskills.io'nun önerdiği tetiklenme testinde yaklaşık 20 örnek mesaj kullanılıyor ve her biri 3 kez çalıştırılıyor. Yani tek bir açıklamayı denemek 60 çalıştırma demek. Aşırı uyumu (overfitting) önlemek için mesajların yaklaşık yüzde 60'ı iyileştirme için, yüzde 40'ı ise sadece doğrulama için ayrılıyor. Rehber çoğu zaman beş turun yeterli olduğunu söylüyor.

## mcp-builder ve claude-api: entegrasyon kuranlar için

- **mcp-builder (resmî):** Büyük dil modellerinin dış hizmetlerle iyi tasarlanmış araçlar üzerinden konuşmasını sağlayan MCP sunucuları geliştirmek için rehber. Python (FastMCP) ya da Node/TypeScript (MCP SDK) ile çalışıyor. Skill süreci dört aşamaya ayırıyor: araştırma ve planlama, uygulama, gözden geçirme ve test, değerlendirme oluşturma. Klasörde dil bazlı başvuru belgeleri ve değerlendirme betikleri var.
- **claude-api (resmî):** Claude API ve Anthropic SDK'ları için başvuru skill'i. Model kimlikleri, parametreler, akış (streaming), araç kullanımı, önbellekleme gibi konuları kapsıyor ve birçok programlama dili için ayrı klasörler içeriyor. Claude belgelerine göre bu açık kaynak skill Claude Code ile birlikte geliyor.
- **webapp-testing (resmî):** Yerel web uygulamalarını Playwright ile test etmeye yönelik araç seti. Ön yüz geliştirenler için tasarım yazısında da bahsettiğimiz pratik bir yardımcı.

## Topluluktan: Superpowers ile mühendislik disiplini

Resmî depo dışında geliştiriciler arasında en çok konuşulan paketlerden biri Jesse Vincent'ın MIT lisanslı obra/superpowers deposu. Kendini kodlama ajanları için "eksiksiz bir yazılım geliştirme metodolojisi" olarak tanımlıyor. Ekim 2026 itibarıyla depoda şu skill'ler bulunuyor (seçki):

| Skill | Ne zaman devreye girer? |
|---|---|
| brainstorming | Yeni bir özellik ya da yaratıcı işe başlamadan önce |
| writing-plans | Çok adımlı bir iş için koda dokunmadan önce plan yazarken |
| test-driven-development | Uygulama sırasında: önce başarısız test, sonra en az kod |
| systematic-debugging | Bir hata ya da başarısız testle karşılaşınca, düzeltme önermeden önce |
| verification-before-completion | "Bitti" demeden önce doğrulama komutlarını çalıştırmak için |

Depo README'si Claude Code'un yanı sıra Codex, Cursor, Gemini CLI ve GitHub Copilot CLI gibi birçok ajan için kurulum talimatı veriyor ve Claude Code tarafında Anthropic'in resmî eklenti pazarında yer aldığını belirtiyor. Bu da Agent Skills'in açık standart olmasının pratik sonucu: aynı skill farklı araçlarda çalışabiliyor.

## Başka platformlarda da aynı fikir

OpenAI'ın ChatGPT ve Codex belgeleri de skill'leri "açık agent skills standardı" üzerine kurulu olarak tanımlıyor. Ekim 2026 itibarıyla belgelerde iki yerleşik yardımcı öne çıkıyor: tarif ettiğin işten skill oluşturan skill-creator (Codex'te $skill-creator ile çağrılıyor) ve openai/skills deposundan ya da başka depolardan hazır skill kuran skill-installer. Codex yerel skill'leri proje ve kullanıcı düzeyinde .agents/skills klasörlerinden okuyor.

Bir geliştirici için en değerli alışkanlık şu olabilir: tekrarladığın her uzun açıklamayı, kod inceleme kontrol listeni ya da dağıtım adımlarını bir skill'e dönüştürüp projenin deposuna koymak. Claude Code'da .claude/skills klasörüne konan skill'ler depoyla birlikte ekibe de gidiyor. Ama kurduğun her topluluk skill'inin betiklerini okumayı unutma, çünkü bu skill'ler bilgisayarında senin yetkilerinle kod çalıştırabiliyor.

Senin geliştirme sürecinde en çok hangi adım "bir skill olsa keşke" dedirtiyor: test mi, kod inceleme mi, dağıtım mı?
