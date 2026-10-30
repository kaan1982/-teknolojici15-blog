---
title: "Skill marketing, video và nội dung: bộ đồ nghề của người sáng tạo"
excerpt: "Kho marketingskills của Corey Haines, plugin marketing của Anthropic, skill của Remotion và HeyGen HyperFrames. Những lựa chọn thật cho nội dung và video."
hook: "Viết video bằng code, viết văn bản bằng skill"
fact: "52 SKILL"
factLabel: "Số skill trong kho marketingskills"
category: "Trí tuệ nhân tạo"
---

Đằng sau blog này mỗi ngày cũng có những video ngắn, ảnh bìa và văn bản được tạo ra. Vì vậy mục này mang chút tính cá nhân với chúng tôi: các skill làm marketing, nội dung và video. Đây cũng là lĩnh vực skill cộng đồng sinh sôi nhanh nhất. Chúng tôi chỉ liệt kê những ví dụ mà chúng tôi đã mở kho ra và kiểm tra bên trong. Mọi con số tính đến cuối tháng 10/2026.

## marketingskills: thư viện marketing 52 skill

Kho coreyhaines31/marketingskills theo giấy phép MIT của Corey Haines, người đứng sau công ty tối ưu chuyển đổi Conversion Factory, là một trong những bộ sưu tập cộng đồng toàn diện nhất trong lĩnh vực này. Theo README, nó được chuẩn bị cho các nhà marketing kỹ thuật và nhà sáng lập; tập trung vào tối ưu chuyển đổi, viết quảng cáo, SEO, phân tích và kỹ thuật tăng trưởng. README nói nó chạy với Claude Code, OpenAI Codex, Cursor và các tác tử khác hỗ trợ tiêu chuẩn Agent Skills.

Trong thư mục skills của kho có 52 skill. Vài ví dụ:

- **copywriting:** Để viết hoặc cải thiện nội dung của mọi loại trang marketing như trang chủ, trang đích, trang bảng giá.
- **seo-audit:** Để kiểm tra và chẩn đoán các vấn đề SEO của một trang web.
- **ai-seo:** Để tối ưu nội dung cho các công cụ tìm kiếm AI, tức để được các mô hình ngôn ngữ lớn trích dẫn làm nguồn trong câu trả lời.
- **emails và cold-email:** Cho chuỗi email, luồng tự động và các chiến dịch email lạnh B2B.
- **social:** Để tạo và lên kế hoạch nội dung cho LinkedIn, X, Instagram, TikTok và Facebook.

Để cài đặt, README đề xuất lệnh npx skills add coreyhaines31/marketingskills. Cũng có thể chọn từng skill riêng.

## Plugin marketing của Anthropic

Kho anthropics/knowledge-work-plugins của Anthropic tập hợp các plugin chuẩn bị theo nhóm nghề nghiệp. Chúng được làm cho Claude Cowork và cũng tương thích với Claude Code. Mỗi plugin gói skill, trình kết nối, lệnh gạch chéo và tác tử con cho công việc đó lại với nhau.

Các skill trong plugin marketing là: brand-review (kiểm tra bản nháp theo giọng điệu thương hiệu và hướng dẫn phong cách, đề xuất chỉnh sửa trước/sau), campaign-plan (xuất bản tóm tắt chiến dịch với mục tiêu, đối tượng, thông điệp, chiến lược kênh và lịch nội dung), content-creation, draft-content, email-sequence, competitive-brief, performance-report và seo-audit. README liệt kê rằng plugin này có thể kết nối với các công cụ như Slack, Canva, Figma, HubSpot và Ahrefs. Nghĩa là ở đây skill cung cấp "phương pháp", còn trình kết nối cung cấp "quyền truy cập".

> **Bạn có biết không?** Video giờ không chỉ làm bằng kéo thả trên dòng thời gian mà còn có thể tạo bằng code, và skill vào cuộc chính ở điểm này. Nhóm Remotion công bố bộ skill chính thức của riêng họ cho khung làm video dựa trên React. HeyGen thì đưa ra HyperFrames, dựa trên ý tưởng "viết HTML, kết xuất video", cùng với skill cho các tác tử.

## Cho video: Remotion và HyperFrames

| Gói | Nguồn | Cung cấp gì? |
|---|---|---|
| remotion-dev/skills | Nhóm Remotion (chính thức) | 12 skill: tạo video, quy tắc hoạt ảnh, phụ đề, kết xuất, xem trước |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skill và các khối dựng sẵn cho khung biến HTML thành video |

**Remotion:** Theo README, Remotion giữ một danh sách Agent Skills mô tả các thực hành tốt nhất khi làm việc trong dự án Remotion. Trong bộ có các skill như remotion-create tạo video mới, remotion-markup mang kiến thức hoạt ảnh và bố cục, remotion-captions cho việc chép lời và hoạt ảnh phụ đề, remotion-render để xuất và remotion-best-practices điều hướng đến tất cả. Cài đặt bằng npx skills add remotion-dev/skills.

**HyperFrames:** Kho của HeyGen tự giới thiệu là "viết HTML, kết xuất video, làm cho tác tử". Theo README, bộ cơ bản gồm các skill hyperframes (làm và chỉnh sửa video), hyperframes-cli (dựng khung dự án, xem trước, kết xuất), hyperframes-registry (khoảng 450 khối chuyển cảnh, tiêu đề, phụ đề và đồ họa dựng sẵn) và media-use (các việc về phương tiện như nhạc, hiệu ứng âm thanh, hình ảnh, lồng tiếng). Tổng cộng có 7 skill đã phát hành.

Một chi tiết thú vị: mô tả của skill video trong kho của Corey Haines cũng liệt kê những tên như Remotion, HyperFrames và HeyGen làm từ khóa kích hoạt. Nghĩa là skill marketing được viết để hoạt động như một cây cầu sang các skill video.

## Cần để ý gì khi chọn?

Phần lớn skill trong lĩnh vực này đến từ cộng đồng hoặc công ty, và cập nhật rất nhanh. Trước khi cài một gói, hỏi ba câu sau sẽ giúp bạn dễ hơn: Kho của ai, có được cập nhật tích cực không? Trong SKILL.md có chỉ dẫn nào kết nối tới địa chỉ bên ngoài hoặc đòi thông tin xác thực không? Bạn có chọn và cài được vài skill mình thực sự cần không? Đa số công cụ cài đặt cho phép chọn từng skill thay vì "cài hết", và điều đó làm nhỏ cả ngữ cảnh lẫn rủi ro.

Trong sản xuất nội dung, kẻ ăn cắp thời gian lớn nhất của bạn là gì: viết văn bản, chuẩn bị hình ảnh hay dựng video?
