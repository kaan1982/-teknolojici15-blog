---
title: "Skill cho lập trình viên: skill-creator, mcp-builder và hơn thế"
excerpt: "Skill viết skill, skill dựng máy chủ MCP, các gói skill mang kỷ luật kiểm thử và gỡ lỗi. Những lựa chọn đã được kiểm chứng dành cho lập trình viên."
hook: "Có một skill viết ra skill"
fact: "20 TRUY VẤN"
factLabel: "Số mẫu khuyến nghị cho bài kiểm tra kích hoạt"
category: "Trí tuệ nhân tạo"
---

Với người phát triển phần mềm, skill thú vị ở hai khía cạnh. Thứ nhất, có những skill "người tạo" giúp bạn viết skill của chính mình nhanh hơn và đo lường được. Thứ hai, có những gói mang đến cho tác tử kỷ luật kỹ thuật (kiểm thử, kế hoạch, gỡ lỗi). Trong bài này chúng tôi nói đến cả hai, chỉ với những ví dụ mà chúng tôi đã xác minh là có tồn tại.

## skill-creator: skill viết ra skill

skill-creator trong kho chính thức anthropics/skills của Anthropic được thiết kế để tạo skill mới, chỉnh sửa và cải thiện skill hiện có, và đo hiệu suất của chúng. Theo mô tả, nó cũng đảm nhận việc chạy đánh giá (eval), so sánh kết quả bằng phân tích phương sai và tối ưu mô tả của skill để kích hoạt tốt hơn.

Quy trình làm việc được mô tả rất con người: quyết định bạn muốn gì, viết bản nháp, chuẩn bị vài tin nhắn thử, chạy Claude có skill với các tin này, cùng đánh giá kết quả, viết lại, lặp lại. Trong thư mục có các script riêng chạy đánh giá, tạo báo cáo so sánh và cải thiện mô tả, cùng một "eval-viewer" để xem kết quả trực quan.

Hướng dẫn tối ưu mô tả của agentskills.io cũng lấy skill này làm ví dụ. Theo hướng dẫn, skill-creator tự động hóa vòng lặp này từ đầu đến cuối: chia tập kiểm thử, đo tỷ lệ kích hoạt song song, đề xuất cải thiện mô tả với Claude và tạo báo cáo HTML trực tiếp.

> **Bạn có biết không?** Bài kiểm tra kích hoạt mà agentskills.io đề xuất dùng khoảng 20 tin nhắn mẫu và chạy mỗi tin 3 lần. Nghĩa là thử một mô tả duy nhất là 60 lần chạy. Để tránh quá khớp (overfitting), khoảng 60% tin nhắn dành cho việc cải thiện và 40% chỉ để kiểm chứng. Hướng dẫn nói phần lớn trường hợp năm vòng là đủ.

## mcp-builder và claude-api: cho người dựng tích hợp

- **mcp-builder (chính thức):** Hướng dẫn phát triển các máy chủ MCP để các mô hình ngôn ngữ lớn giao tiếp với dịch vụ bên ngoài qua những công cụ được thiết kế tốt. Làm việc với Python (FastMCP) hoặc Node/TypeScript (MCP SDK). Skill chia quy trình thành bốn giai đoạn: nghiên cứu và lập kế hoạch, triển khai, rà soát và kiểm thử, tạo đánh giá. Trong thư mục có tài liệu tham khảo theo từng ngôn ngữ và script đánh giá.
- **claude-api (chính thức):** Skill tham khảo cho Claude API và các SDK của Anthropic. Bao gồm các chủ đề như mã định danh mô hình, tham số, truyền phát (streaming), sử dụng công cụ, bộ nhớ đệm, và có thư mục riêng cho nhiều ngôn ngữ lập trình. Theo tài liệu Claude, skill mã nguồn mở này đi kèm với Claude Code.
- **webapp-testing (chính thức):** Bộ công cụ để kiểm thử ứng dụng web cục bộ bằng Playwright. Là trợ thủ thực tế dành cho người làm giao diện, mà chúng tôi cũng nhắc trong bài về thiết kế.

## Từ cộng đồng: kỷ luật kỹ thuật với Superpowers

Ngoài kho chính thức, một trong những gói được bàn tán nhiều nhất giữa các lập trình viên là kho obra/superpowers theo giấy phép MIT của Jesse Vincent. Nó tự mô tả là "một phương pháp luận phát triển phần mềm hoàn chỉnh" cho các tác tử lập trình. Tính đến tháng 10/2026, trong kho có các skill sau (chọn lọc):

| Skill | Khi nào hoạt động? |
|---|---|
| brainstorming | Trước khi bắt đầu một tính năng hay công việc sáng tạo mới |
| writing-plans | Khi viết kế hoạch trước khi đụng vào code cho một việc nhiều bước |
| test-driven-development | Trong khi triển khai: trước tiên viết test thất bại, sau đó viết ít code nhất |
| systematic-debugging | Khi gặp lỗi hay test thất bại, trước khi đề xuất cách sửa |
| verification-before-completion | Để chạy các lệnh kiểm chứng trước khi nói "xong rồi" |

README của kho đưa hướng dẫn cài đặt cho nhiều tác tử như Codex, Cursor, Gemini CLI và GitHub Copilot CLI bên cạnh Claude Code, và nói rằng ở phía Claude Code, nó có trong chợ plugin chính thức của Anthropic. Đó là hệ quả thực tế của việc Agent Skills là một tiêu chuẩn mở: cùng một skill có thể chạy ở các công cụ khác nhau.

## Ý tưởng tương tự ở các nền tảng khác

Tài liệu ChatGPT và Codex của OpenAI cũng mô tả skill là được xây dựng trên "tiêu chuẩn agent skills mở". Tính đến tháng 10/2026, trong tài liệu có hai trợ thủ tích hợp nổi bật: skill-creator tạo skill từ việc bạn mô tả (được gọi bằng $skill-creator trong Codex) và skill-installer cài các skill dựng sẵn từ kho openai/skills hoặc các kho khác. Codex đọc các skill cục bộ từ thư mục .agents/skills ở cấp dự án và cấp người dùng.

Với lập trình viên, thói quen đáng giá nhất có thể là: biến mỗi lời giải thích dài mà bạn lặp đi lặp lại, danh sách kiểm tra rà soát code, hay các bước triển khai thành một skill rồi đặt vào kho của dự án. Trong Claude Code, các skill đặt trong thư mục .claude/skills sẽ đến với cả nhóm cùng với kho. Nhưng đừng quên đọc các script của mọi skill cộng đồng bạn cài, vì những skill này có thể chạy mã trên máy bạn bằng quyền của bạn.

Trong quy trình phát triển của bạn, bước nào khiến bạn nghĩ nhiều nhất "ước gì có một skill": kiểm thử, rà soát code hay triển khai?
