---
title: "DeepSeek, ekip sohbetlerini dinleyip kod yazan Super-Agent'ı açık kaynak yaptı"
slug: "2026-11-02-deepseek-super-agent"
date: "2026-11-02"
rank: 1
category: "Haber"
excerpt: "DeepSeek, GitHub ve Feishu'daki istekleri takip edip pull request açan deneysel kodlama ajanı Super-Agent'ın kodunu MIT lisansıyla yayımladı."
hook: "Çağırmadan işe koşan kod ajanı"
fact: "MIT"
factLabel: "Super-Agent'ın açık kaynak lisansı"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-02-deepseek-super-agent.webp"
readMin: 2
sources:
  - title: "DeepSeek open-sources Super-Agent, a coding agent that reads team chats (The Next Web)"
    url: "https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent"
  - title: "DeepSeek Super-agent: A Proactive Open-Source Coding Agent Prototype (DEV Community)"
    url: "https://dev.to/paullovelace/deepseek-super-agent-a-proactive-open-source-coding-agent-prototype-what-it-actually-is-and-438a"
  - title: "deepseek-ai/dsh-superagent-prototype (GitHub)"
    url: "https://github.com/deepseek-ai/dsh-superagent-prototype"
---
Çinli yapay zekâ şirketi DeepSeek, yazılım ekipleri için tasarladığı deneysel kodlama ajanı Super-Agent'ın kodunu 31 Ekim'de GitHub'da yayımladı. Bloomberg'e göre şirket bu ajanla Anthropic'in Claude Code'u gibi araçlarla yarışmayı hedefliyor.

## Ne yapıyor?

Super-Agent tek bir GitHub deposu için çalışıyor. GitHub'daki konuşmaları ve isteğe bağlı olarak ByteDance'in iş yazışma uygulaması Feishu'daki grup sohbetlerini dinliyor. Yetkili bir ekip üyesi bir iş istediğinde ajan kendi oturumunda ayrı bir görev açıyor, işi yapıyor ve sonucu, örneğin bir pull request'i, isteğin geldiği konuşmanın altına yazıyor. İnsan kararı gereken işler ise bir web panelinde listeleniyor.

Projenin el kitabına göre amaç, ekipten "olabildiğince az dikkat" isterken iş üretmek. DeepSeek'in felsefe belgesi, ajanın yalnızca kendisinden istendiğinde ya da ekibin koyduğu bir kural izin verdiğinde harekete geçtiğini vurguluyor. Şirket, bütün ekip adına çalışan bir ajanın o ekibin dikkatini de boşa harcayabileceği uyarısını yapıyor.

Kod MIT lisansıyla yayımlandı; yani herkes indirip değiştirebilir ve ticari olarak kullanabilir. Depo yayımlandıktan sonraki iki gün içinde 9 binden fazla yıldız topladı.

## Sınırları neler?

DeepSeek, Super-Agent'ı "araştırma prototipi" olarak tanımlıyor ve resmi bir ürün olmadığını açıkça yazıyor. Açık kaynak sürüm, şirketin içeride kullandığı sürümle aynı değil. Duyuru yazısındaki bazı fikirler henüz kodda yok. Yetkilendirme, inceleme ve güven gibi zor sorunların çözülmediği de belgede kabul ediliyor; kullanıcılardan kodu çalıştırmadan önce incelemeleri isteniyor.

## Neden önemli?

Kodlama ajanları bugüne kadar çoğunlukla tek bir geliştiricinin komutunu bekleyen araçlardı. Super-Agent ise ekibin sohbetine yerleşip işi kendisi üstlenen bir "takım arkadaşı" fikrini deniyor ve bunu herkesin inceleyebileceği şekilde açık yapıyor. Fikir tutarsa, ajanlara ne kadar yetki verileceği sorusu yazılım ekiplerinin gündeminin üst sıralarına çıkacak. Yazılımdaki ilk "böceğin" gerçek bir güve olduğunu [1947'nin güvesi](/yazi/ilk-bilgisayar-bocegi-1947/) yazımızda anlatmıştık.
