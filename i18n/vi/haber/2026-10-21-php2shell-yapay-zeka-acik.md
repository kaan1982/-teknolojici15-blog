---
title: "AI tìm ra lỗ hổng nghiêm trọng trong PHP, nền tảng của 70% trang web"
excerpt: "Hai lỗ hổng mang tên PHP2Shell cho phép chạy mã trên máy chủ mà không cần đăng nhập. Các mô hình như GPT-5.6 Sol và Gemini 4 Argon được dùng trong quá trình phát hiện."
hook: "AI tìm ra lỗ hổng khổng lồ của PHP"
fact: "CVSS 9,2"
factLabel: "Điểm cao nhất của các lỗ hổng PHP2Shell"
category: "Trí tuệ nhân tạo"
---
Ngày 21 tháng 10, các nhà phát triển PHP phát hành bản vá khẩn cho hai lỗ hổng bảo mật nghiêm trọng trong động cơ lõi của ngôn ngữ này. Các lỗ hổng có tên "PHP2Shell", mang số CVE-2026-109618 và CVE-2026-109619, được tìm ra với sự giúp đỡ của các công cụ AI.

## Chuyện gì đã xảy ra?

Theo Fortune, công ty kiểm thử bảo mật AI Calif đã tìm ra mắt xích đầu tiên của chuỗi vào ngày 1 tháng 8 bằng GPT-5.6 Sol; còn Wiz phát hiện độc lập lỗ hổng đầu tiên vào ngày 19 tháng 8 và báo cho đội bảo mật PHP ngày 24 tháng 8. Quá trình phát hiện dùng công cụ Wiz Atlas của chính Wiz cùng các mô hình GPT-5.6 Sol của OpenAI và Gemini 4 Argon của Google.

Các lỗ hổng cho phép kẻ tấn công thực thi mã từ xa trên máy chủ mà không cần đăng nhập và làm rò rỉ dữ liệu trong bộ nhớ. Theo Wiz, gần như mọi phiên bản PHP ra mắt trong mười năm qua, lùi tới 5.4, đều bị ảnh hưởng. Điểm mức độ nghiêm trọng cao nhất trên thang CVSS là 9,2. PHP chạy phía sau khoảng 70% trang web trên thế giới; riêng WordPress cũng quản lý khoảng 40% số trang. Theo bản tin cập nhật của Fortune, các lỗ hổng bắt đầu bị khai thác trên diện rộng sau khi có bản vá.

## Vì sao điều này quan trọng?

Đây là một trong những ví dụ cụ thể nhất cho thấy AI trong nghiên cứu bảo mật không còn chỉ là trợ thủ mà có thể là bên đi khám phá. Nhưng cùng những công cụ đó cũng nằm trong tay kẻ tấn công, và khoảng cách giữa lúc có bản vá và lúc bắt đầu khai thác đang rút ngắn. Mọi chủ trang web dùng PHP cần cập nhật máy chủ ngay. Ở bức tranh rộng hơn, những lỗi ẩn trong mã cũ chạy hàng thập kỷ của internet giờ có thể lộ ra nhanh hơn nhiều. Chúng tôi đã kể câu chuyện về chương trình đầu tiên tự lang thang trên mạng trong [bài về Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
