---
title: "Skill là gì? \"Thư mục kỹ năng\" mới của các tác tử AI"
excerpt: "Agent Skill là một thư mục gồm tệp SKILL.md và các script tùy chọn. Tác tử chỉ nạp nó khi cần. Khác gì so với prompt, MCP và plugin?"
hook: "Dạy tác tử một kỹ năng mới bằng một thư mục"
fact: "3 TẦNG"
factLabel: "Nội dung skill được nạp dần theo tầng"
category: "Trí tuệ nhân tạo"
---

Các trợ lý AI biết mỗi thứ một chút, nhưng không biết mẫu báo cáo của công ty bạn, màu sắc thương hiệu của bạn, hay mẹo xử lý đúng một loại tệp. Thay vì giải thích dài dòng điều đó trong mỗi cuộc trò chuyện, nếu bạn có thể đóng gói một lần rồi bảo tác tử "dùng khi cần" thì sao? Đó chính là ý tưởng của "skill" (kỹ năng).

## Nói ngắn gọn: một thư mục và một SKILL.md

Theo định nghĩa của Anthropic, Agent Skills là các gói mô-đun mở rộng khả năng của Claude. Mỗi skill gom chỉ dẫn, siêu dữ liệu và các tài nguyên tùy chọn (script, mẫu) lại với nhau, và Claude tự dùng chúng khi liên quan. Blog kỹ thuật của Anthropic nói còn giản dị hơn: skill là "các thư mục chỉ dẫn, script và tài nguyên được sắp xếp" mà tác tử nạp khi cần để làm tốt hơn một số việc nhất định.

Về mặt kỹ thuật, một skill là một thư mục có ít nhất một tệp tên SKILL.md. Ở đầu tệp này có hai trường bắt buộc theo định dạng YAML: name (tên) và description (mô tả). Bên dưới là chỉ dẫn viết bằng Markdown thuần. Nếu muốn, bạn có thể thêm các thư mục con vào thư mục như scripts/ (mã chạy được), references/ (tài liệu bổ sung) và assets/ (mẫu, hình ảnh, dữ liệu).

Anthropic ví cấu trúc này với cuốn sổ tay hướng dẫn hòa nhập chuẩn bị cho nhân viên mới. Bạn để sổ trên bàn, nhân viên mở ra xem khi cần.

## Bí quyết: không phải mọi thứ được nạp cùng lúc

Điều phân biệt skill với một prompt dài thông thường là thiết kế gọi là "nạp dần" (progressive disclosure). Theo tài liệu Claude, nội dung được nạp theo ba tầng:

| Tầng | Khi nào được nạp? |
|---|---|
| 1. Siêu dữ liệu (tên + mô tả) | Luôn luôn, lúc khởi động (khoảng 100 token mỗi skill) |
| 2. Phần thân SKILL.md | Khi skill được kích hoạt (khuyến nghị dưới 5.000 token) |
| 3. Tệp bổ sung và script | Chỉ khi cần; chỉ kết quả của script đi vào ngữ cảnh |

Nhờ vậy bạn có thể nạp hàng chục skill cho tác tử mà không skill nào làm đầy cửa sổ ngữ cảnh. Cho tới khi được kích hoạt, mỗi skill chỉ có tên và mô tả "nằm trên bàn". Trong ví dụ của tài liệu, skill PDF giữ hướng dẫn điền biểu mẫu trong một tệp forms.md riêng và Claude chỉ đọc tệp này khi thực sự điền biểu mẫu.

> **Bạn có biết không?** Anthropic công bố Agent Skills ngày 16 tháng 10 năm 2025 và ngày 18 tháng 12 năm 2025 phát hành định dạng như một tiêu chuẩn mở tại agentskills.io. Vì vậy tính đến tháng 10/2026, bạn thấy cùng cấu trúc SKILL.md ấy trong tài liệu của các công cụ khác như GitHub Copilot và OpenAI Codex. Tài liệu của Copilot hướng thẳng tới đặc tả agentskills.io để kiểm tra skill.

## Prompt, MCP, plugin: khác nhau thế nào?

Những khái niệm này hay bị nhầm vì đều liên quan đến việc "làm tác tử tốt hơn". Sự phân biệt của Trung tâm trợ giúp Claude có thể tóm tắt như sau:

- **Prompt hoặc chỉ dẫn tùy chỉnh:** Định hướng chung có hiệu lực trong mỗi cuộc trò chuyện hoặc mọi cuộc trò chuyện. Còn skill dành riêng cho từng nhiệm vụ và chỉ vào cuộc khi liên quan.
- **Dự án (Projects):** Kiến thức nền cố định luôn được nạp trong các cuộc trò chuyện của một dự án. Còn skill là quy trình chỉ mở ra khi cần.
- **Trình kết nối MCP (Model Context Protocol):** Kết nối Claude với dịch vụ và nguồn dữ liệu bên ngoài. Nghĩa là cung cấp "quyền truy cập". Còn skill là "kiến thức phương pháp" nói cách dùng quyền truy cập đó. Trung tâm trợ giúp cho biết hai thứ này thường được dùng cùng nhau.
- **Plugin:** Ở phía Claude Code và Cowork, plugin là gói để phân phối nhiều bộ phận (skill, trình kết nối, lệnh, tác tử con) cùng nhau. Tài liệu của OpenAI cũng phân biệt tương tự: skill là định dạng để viết, plugin là cách phân phối.

Tóm lại, MCP đưa tay cho tác tử, skill dạy bàn tay đó kỹ năng, còn plugin giao tất cả trong một chiếc hộp.

## Chạy ở đâu?

Tính đến tháng 10/2026, theo tài liệu Claude, skill dùng được trong các ứng dụng Claude (claude.ai), Claude Code và Claude API cùng công cụ thực thi mã. Trung tâm trợ giúp cho biết skill có trong các gói Free, Pro, Max, Team và Enterprise và yêu cầu bật tính năng thực thi mã.

Một chi tiết quan trọng: skill tùy chỉnh không đồng bộ giữa các nền tảng. Skill bạn tải lên claude.ai chỉ riêng tài khoản của bạn. Skill tải lên API được chia sẻ với toàn bộ không gian làm việc. Còn trong Claude Code, nó được giữ ở thư mục cá nhân (~/.claude/skills/) hoặc thư mục dự án (.claude/skills/).

Còn có khía cạnh bảo mật. Vì skill có thể chạy mã, tài liệu khuyên coi chúng "như cài phần mềm" và chỉ dùng từ nguồn đáng tin. Chúng tôi sẽ bàn riêng điều này ở bài cuối của loạt.

Trong các bài tiếp theo của phần này, chúng ta sẽ viết skill của riêng bạn từng bước và xem xét theo từng danh mục những skill thực sự tồn tại và hữu ích.

Việc nào bạn ngày nào cũng phải giải thích lại cho AI, khiến bạn nghĩ "giá mà dạy một lần thôi"?
