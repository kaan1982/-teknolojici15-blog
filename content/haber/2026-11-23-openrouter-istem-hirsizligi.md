---
title: "Yapay zekâ isteklerini aracılar okumuş: OpenRouter 3 sağlayıcıyı çıkardı"
slug: "2026-11-23-openrouter-istem-hirsizligi"
date: "2026-11-23"
rank: 2
topic: "yapay-zeka"
category: "Haber"
excerpt: "Dragos'un 2 milyon tuzak istekle yaptığı araştırma, ucuz yapay zekâ sağlayıcılarında istem ve anahtar hırsızlığını ortaya koydu; OpenRouter 3 sağlayıcıyı çıkardı."
hook: "Sorunuzu başkası da okuyor olabilir"
fact: "2 milyon"
factLabel: "araştırmada gönderilen tuzak istek"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-23-openrouter-istem-hirsizligi.webp"
readMin: 2
sources:
  - title: "Security researchers show how cheap AI inference providers steal keys and snoop on users (The Decoder)"
    url: "https://the-decoder.com/security-researchers-show-how-cheap-ai-inference-providers-steal-keys-and-snoop-on-users/"
  - title: "OpenRouter Drops 3 Providers After Researchers Catch Months of Prompt Theft at AI Hosting Firms (The Hacker News)"
    url: "https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html"
  - title: "Three breaches, endless leaks: Your AI supply chain needs canaries (Dragos)"
    url: "https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens"
---
Siber güvenlik şirketi Dragos, yapay zekâ modellerine giden isteklerin yolda kimlerin eline geçtiğini ölçmek için sıra dışı bir deney yaptı. Sonuçlar, farklı modelleri tek bir arayüzden sunan OpenRouter'ı harekete geçirdi: platform üç sağlayıcıyı listeden çıkardı ve 125 uç noktanın "Sıfır Veri Saklama" onayını geri aldı.

## Deney nasıl yapıldı?

Araştırmacılar temmuz ile kasım 2026 arasında yaklaşık 2 milyon istek gönderdi. Her isteğin içine, kullanıldığı anda kendini ele veren sahte parolalar ve gizli bağlantılar, yani "kanarya" tuzakları yerleştirdiler. The Decoder'ın aktardığına göre en az üç sağlayıcının saldırganlarca ele geçirildiği ve verilerin aylarca çalındığı ortaya çıktı. Sağlayıcıların hiçbiri, Dragos haber verene kadar durumun farkında değildi.

En büyük olayda saldırganlar yüzlerce AWS anahtarı topladı; bazılarını birkaç saat içinde denediler. Pazar yeri mantığıyla çalışan bazı aracıların ise bir açık bulmasına bile gerek kalmadı: modeli en ucuz fiyattan listeleyip kayıt tutmayı açmak, müşteri isteklerini okumaya yetiyordu. "Veri saklamıyoruz" sözü verilen ayarların da sık sık çiğnendiği görüldü.

## OpenRouter ne yaptı?

Şirket, etkilenen kullanıcılara e-posta göndererek MiniMax modellerine yaptıkları isteklerin üçüncü kişilerce okunmuş olabileceği konusunda uyardı. Novita, Phala ve Together gibi sağlayıcılar ön inceleme raporları yayımladı.

## Neden önemli?

Bir yapay zekâ sohbetine yapıştırılan her parola, kod parçası ya da şirket belgesi, modele ulaşana kadar birden fazla aracıdan geçebiliyor ve her aracı isteğin tamamını görebiliyor. Dragos'un tavsiyesi net: isteklere asla gerçek kimlik bilgisi koymamak ve verinin hangi yoldan gittiğini fiyata bırakmamak. Parolanın nasıl doğduğunu merak edenler [ilk bilgisayar şifresi yazımıza](/yazi/ilk-bilgisayar-sifresi-ctss/) göz atabilir.
