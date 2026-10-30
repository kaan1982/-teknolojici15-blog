---
title: "Skill thiết kế và web: cho giao diện không còn mùi khuôn mẫu"
excerpt: "frontend-design, web-artifacts-builder, canvas-design và skill web-design-guidelines của Vercel. Những skill thật giúp cải thiện giao diện do tác tử tạo ra."
hook: "Vì sao thiết kế do AI làm luôn giống nhau?"
fact: "10 CHỦ ĐỀ"
factLabel: "Số chủ đề dựng sẵn trong theme-factory"
category: "Trí tuệ nhân tạo"
---

Nếu bạn từng nhờ AI làm một trang web, hẳn bạn đã nhận ra: kết quả chạy được nhưng có gì đó quen quen. Cùng những dải chuyển màu tím, cùng tiêu đề căn giữa, cùng bố cục thẻ. Phần lớn các skill thiết kế vật lộn với đúng vấn đề này: khiến mô hình đưa ra quyết định thiết kế có chủ đích, thay vì "mặc định".

Chúng tôi đã nêu nguồn của mọi skill trong bài này. Kho chính thức của Anthropic là anthropics/skills, còn các kho cộng đồng hoặc công ty được đánh dấu riêng.

## frontend-design: tránh lối mặc định

Mô tả của skill frontend-design trong kho chính thức rất rõ: hướng dẫn cho "thiết kế hình ảnh có chủ đích, khác biệt" khi dựng giao diện mới hoặc định hình lại giao diện hiện có. Nó giúp chọn hướng thẩm mỹ, kiểu chữ và những lựa chọn "không đọc lên như khuôn mẫu".

Phần thân của skill đặt mô hình vào vai trưởng nhóm thiết kế của một studio thiết kế, và bắt đầu công việc với giả định khách hàng vốn đã từ chối các đề xuất sáo rỗng. Đây cũng là ví dụ cho một kỹ thuật viết skill tốt: thay vì chất đống kiến thức, hãy cho mô hình một góc nhìn rõ ràng.

## Sản phẩm web: web-artifacts-builder và webapp-testing

- **web-artifacts-builder (chính thức):** Bộ công cụ tạo các sản phẩm HTML phức tạp, nhiều thành phần, cần quản lý trạng thái hoặc định tuyến, bằng công nghệ giao diện hiện đại như React, Tailwind CSS và shadcn/ui trên claude.ai. Mô tả của nó cũng nói không nên dùng cho các việc HTML một tệp đơn giản. Trong thư mục có các script khởi tạo dự án và đóng gói thành một tệp.
- **webapp-testing (chính thức):** Bộ công cụ kiểm thử ứng dụng web cục bộ bằng Playwright. Dùng để xác minh chức năng giao diện, gỡ lỗi giao diện, chụp màn hình và đọc nhật ký trình duyệt. Là câu trả lời cho "nó có thật sự chạy không?" sau khi thiết kế xong.

> **Bạn có biết không?** Skill theme-factory trong kho chính thức đi kèm 10 chủ đề dựng sẵn có thể áp dụng cho mọi sản phẩm, từ slide đến trang đích HTML. Tên các tệp chủ đề trong thư mục cũng đầy cảm hứng: "arctic-frost", "midnight-galaxy", "golden-hour", "tech-innovation" và tương tự. Nếu muốn, skill cũng có thể tạo ngay một chủ đề mới.

## Nghệ thuật thị giác: canvas-design, algorithmic-art, slack-gif-creator

Trong kho của Anthropic còn ba skill đại diện cho mảng "sáng tạo":

- **canvas-design:** Dùng cách tiếp cận "triết lý thiết kế" để tạo poster, tác phẩm nghệ thuật hoặc thiết kế tĩnh dưới dạng .png và .pdf. Trong thư mục có hơn 80 tệp phông chữ. Mô tả của nó nêu rõ điều kiện là không sao chép tác phẩm của các nghệ sĩ hiện có.
- **algorithmic-art:** Tạo nghệ thuật sinh tạo bằng p5.js, với tính ngẫu nhiên có hạt giống (seeded randomness) và tham số tương tác. Được thiết kế cho các yêu cầu như trường dòng chảy, hệ thống hạt.
- **slack-gif-creator:** Cung cấp các ràng buộc, công cụ xác thực và ý tưởng hoạt ảnh để tạo GIF động tối ưu cho Slack. Dành cho những yêu cầu kiểu "làm cho tôi một GIF Slack có X đang làm Y".

## Từ cộng đồng: skill giao diện và React của Vercel

Ngoài kho chính thức, một trong những gói tập trung vào thiết kế được biết đến nhiều nhất là kho vercel-labs/agent-skills của Vercel. Tính đến tháng 10/2026, trong kho có:

| Skill | Làm gì? |
|---|---|
| web-design-guidelines | Kiểm tra mã giao diện theo hơn 100 quy tắc bao gồm khả năng tiếp cận, hiệu năng và trải nghiệm người dùng |
| vercel-react-best-practices | Quy tắc hiệu năng React và Next.js của đội kỹ thuật Vercel (hơn 40 quy tắc trong 8 danh mục) |
| vercel-composition-patterns | Các mẫu ghép thành phần React có thể mở rộng |
| vercel-react-view-transitions | Hoạt ảnh chuyển cảnh mượt với View Transition API của React |
| vercel-react-native-skills | Quy tắc hiệu năng và kiến trúc cho React Native và Expo |

Những skill này không gắn với một công cụ duy nhất. Kho của Vercel đề xuất cài bằng lệnh npx skills add vercel-labs/agent-skills và các skill dùng được trên nhiều tác tử khác nhau hỗ trợ tiêu chuẩn Agent Skills.

## Dùng cái nào khi nào?

Một thứ tự thực tế có thể là: xác định hướng thiết kế bằng frontend-design, cố định màu sắc và phông chữ bằng theme-factory hoặc skill thương hiệu của riêng bạn, tạo sản phẩm bằng web-artifacts-builder, rồi kiểm tra bằng web-design-guidelines và thử trong trình duyệt bằng webapp-testing. Mỗi cái là một chuyên môn riêng, và nhờ nạp dần, giữ cả bộ cài cùng lúc không làm phình ngữ cảnh.

Một lời cảnh báo: một số skill này (ví dụ web-artifacts-builder) chạy script. Tài liệu Claude khuyên coi skill như cài phần mềm và chỉ cài từ nguồn bạn tin. Trước khi cài bất kỳ gói nào ngoài kho chính thức, liếc qua SKILL.md và script của nó là một thói quen tốt.

Theo bạn, các thiết kế làm bằng AI theo thời gian sẽ đa dạng hơn, hay khi ai cũng dùng cùng các skill, một sự "đồng phục" mới sẽ ra đời?
