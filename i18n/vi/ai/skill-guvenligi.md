---
title: "An toàn của skill: mọi điều bạn cần đọc trước khi cài"
excerpt: "Skill có thể chạy mã và kéo chỉ dẫn từ nguồn bên ngoài. Hướng dẫn về nguồn đáng tin, rà soát SKILL.md và script, quyền tối thiểu và khóa bí mật."
hook: "Cài skill là cài phần mềm"
fact: "13,4%"
factLabel: "Tỷ lệ skill có lỗ hổng nghiêm trọng (Snyk, 2026)"
category: "Trí tuệ nhân tạo"
---

Điều khiến skill mạnh mẽ cũng chính là điều khiến chúng rủi ro: một skill không chỉ mang văn bản mà còn có thể mang mã chạy được. Khi tác tử nạp skill đó, nó làm theo các chỉ dẫn bên trong như chỉ dẫn của chính nó và có thể chạy các script. Vì vậy lời khuyên của tài liệu Claude có thể tóm gọn trong một câu: hãy coi việc cài skill như cài phần mềm.

## Các nguồn chính thức nói gì?

Phần bảo mật trong tài liệu Claude khá thẳng thắn. Nó khuyên chỉ dùng skill từ nguồn đáng tin, tức do chính bạn viết hoặc lấy từ Anthropic. Nếu buộc phải dùng skill từ nguồn lạ, nó yêu cầu bạn "cực kỳ cẩn thận" và kiểm tra từ đầu đến cuối trước khi dùng.

Bài viết kỹ thuật của Anthropic cũng cùng hướng: với skill từ nguồn kém tin cậy hơn, nó khuyên xem xét các tệp đóng gói, đặc biệt là phụ thuộc mã và script, cũng như kiểm tra những chỉ dẫn yêu cầu kết nối ra mạng ngoài. Tài liệu còn nhấn mạnh một rủi ro: các skill kéo dữ liệu từ địa chỉ bên ngoài là nguy hiểm, vì nội dung kéo về có thể chứa chỉ dẫn độc hại.

## Ngoài thực tế đang diễn ra gì?

Những cảnh báo này không phải lý thuyết. Công ty bảo mật Snyk, trong nghiên cứu "ToxicSkills" công bố ngày 5 tháng 2 năm 2026, đã quét 3.984 skill từ ClawHub và skills.sh. Kết quả:

| Phát hiện | Số lượng |
|---|---|
| Skill được quét | 3.984 |
| Có ít nhất một vấn đề bảo mật | 1.467 (36,82%) |
| Có ít nhất một vấn đề nghiêm trọng | 534 (13,4%) |
| Tải trọng độc hại đã xác minh | 76 |

Theo báo cáo, dữ liệu skills.sh chỉ bao gồm 100 skill đầu được chọn của trang đó, còn con số toàn thị trường là của ClawHub. Trong các kiểu tấn công được thấy có hướng dẫn cài đặt dụ người dùng tải và chạy phần mềm không đáng tin, các lệnh được che giấu (ngụy trang bằng Base64 hoặc Unicode) gửi thông tin xác thực cho kẻ tấn công, và các nỗ lực tắt kiểm soát bảo mật và cài cửa hậu. Trong 91% skill độc hại đã xác minh có dùng tiêm lệnh (prompt injection).

> **Bạn có biết không?** Theo Trung tâm trợ giúp Claude, các tổ chức Enterprise có thể bật tính năng quét skill để kiểm tra skill và plugin được tải lên xem có nội dung độc hại không. Nhưng đó là lưới an toàn, không thay thế việc đọc. Cách tốt nhất để hiểu một skill làm gì là tự mở SKILL.md và các script của nó ra đọc trước khi cài.

## Danh sách kiểm tra trước khi cài

Một danh sách thực tế chúng tôi rút ra từ các đề xuất trong tài liệu và phát hiện ngoài thực tế:

1. **Xác minh nguồn.** Kho của ai? Là một công ty chính thức hay nhà phát triển có tiếng, hay là một bản sao rất giống một gói nổi tiếng (typosquatting)?
2. **Đọc SKILL.md từ đầu đến cuối.** Những câu như "trước hết hãy tải cái này về và chạy", "tắt cài đặt bảo mật", "gửi đến địa chỉ này" là dấu hiệu báo động.
3. **Xem thư mục scripts/.** Nếu có dòng bạn không đọc nổi, bị che giấu hoặc mã hóa Base64 thì đừng cài.
4. **Kiểm tra các liên kết bên ngoài.** Nếu skill kéo chỉ dẫn hay dữ liệu từ một địa chỉ web, hãy nhớ rằng nội dung đó có thể thay đổi bất cứ lúc nào.
5. **Cài thứ bạn cần.** Chọn từng skill thay vì "cài hết" làm nhỏ cả ngữ cảnh lẫn bề mặt tấn công.

## Quyền tối thiểu và khóa bí mật

Nơi skill chạy cũng quan trọng. Theo tài liệu Claude, trong môi trường Claude API, skill không có truy cập mạng và không thể cài gói khi chạy. Trên claude.ai, truy cập mạng có thể đầy đủ, một phần hoặc tắt tùy cài đặt của người dùng và quản trị viên. Còn trong Claude Code, skill có quyền truy cập mạng như bất kỳ chương trình nào trên máy tính bạn. Nghĩa là skill bạn cài trên tác tử cục bộ chạy bằng quyền của bạn.

Vì vậy nguyên tắc quyền tối thiểu là then chốt. Trong Claude Code, trường allowed-tools trong frontmatter của skill cho phép dùng một số công cụ mà không hỏi quyền khi skill được gọi. Theo tài liệu, quyền này được đặt lại ở tin nhắn tiếp theo. Dù vậy, nếu bạn thấy quyền rộng trong một skill do người khác viết, thói quen tốt là đừng cài khi chưa chủ động chấp thuận.

Với khóa bí mật, quy tắc đơn giản: đừng bao giờ ghi khóa API, mật khẩu và mã truy cập vào SKILL.md hay thư mục skill. Khi bạn chia sẻ skill hoặc đẩy lên kho, mọi thứ trong thư mục đó cũng đi theo. Hãy giữ khóa trong biến môi trường hoặc cách lưu thông tin xác thực an toàn của công cụ bạn dùng, và chỉ nói với skill cách truy cập chúng.

Tính đến tháng 10/2026, hệ sinh thái skill đang lớn rất nhanh và sự tăng trưởng này gợi nhớ những vấn đề bảo mật của những năm đầu các cửa hàng ứng dụng. Tin tốt là đọc một skill dễ hơn nhiều so với đọc mã nguồn của một ứng dụng, vì phần lớn nó là văn bản thuần.

Trước khi cài một skill, bạn có mở ra đọc bên trong không, hay chỉ tin vào số sao và số lượt tải?
