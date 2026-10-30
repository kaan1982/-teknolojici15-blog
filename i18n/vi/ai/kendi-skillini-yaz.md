---
title: "Tự viết skill của bạn: kỹ năng đầu tiên với SKILL.md, từng bước"
excerpt: "Một thư mục, một SKILL.md và một mô tả được viết tốt. Các bước tự viết Agent Skill, tầm quan trọng của trường description và cách kiểm thử."
hook: "Mô tả là thứ kích hoạt skill"
fact: "1.024"
factLabel: "Số ký tự tối đa cho trường description"
category: "Trí tuệ nhân tạo"
---

Để viết một skill, bạn không cần là lập trình viên. Ở dạng đơn giản nhất, một thư mục và một tệp văn bản bên trong là đủ. Nhưng khác biệt giữa một skill chạy tốt và một skill không bao giờ được kích hoạt thường nằm trong một câu duy nhất: phần mô tả. Trong bài này chúng ta viết từ đầu một skill nhỏ nhưng có thật.

## Bước 1: Tạo thư mục và SKILL.md

Theo đặc tả Agent Skills, một skill là một thư mục chứa ít nhất một tệp SKILL.md. Ở đầu tệp có phần thông tin YAML (frontmatter) và hai trường bắt buộc:

- **name:** Tối đa 64 ký tự. Chỉ chữ thường, chữ số và dấu gạch ngang. Không được bắt đầu hay kết thúc bằng gạch ngang, không chứa hai gạch ngang liên tiếp và phải trùng tên thư mục. Tài liệu Claude còn nêu thêm rằng các từ "anthropic" và "claude" không được dùng trong tên.
- **description:** Không được để trống, tối đa 1.024 ký tự. Phải nói skill làm gì và khi nào dùng.

Cũng có các trường tùy chọn (license, compatibility, metadata và allowed-tools mang tính thử nghiệm), nhưng đa số skill không cần.

## Bước 2: Viết mô tả thật cẩn thận

Vì sao mô tả lại quan trọng đến thế? Bởi lúc khởi động, tác tử chỉ đọc tên và mô tả của mỗi skill. Theo cách nói của agentskills.io, "toàn bộ gánh nặng" của việc kích hoạt nằm trên vai mô tả. Nếu mô tả không nói khi nào việc này có ích, tác tử sẽ không với tới skill đó.

Khuyến nghị của các nguồn có thể tóm lại như sau:

- Viết cả **làm gì** lẫn **khi nào dùng**.
- Vì mô tả được đưa vào system prompt, tài liệu Claude khuyên viết bằng **ngôi thứ ba** ("Xử lý tệp Excel", chứ không phải "Tôi có thể giúp bạn").
- agentskills.io khuyên liệt kê rõ cả những trường hợp người dùng không gọi tên lĩnh vực đó.
- Giữ ngắn: vài câu, nhiều nhất một đoạn ngắn. Claude Code cắt mô tả ở 1.536 ký tự trong danh sách, vì vậy trường hợp dùng quan trọng nhất nên nằm ở đầu.

## Bước 3: Giữ phần thân ngắn, dùng script khéo léo

Hãy nghĩ đến một skill theo đúng quy tắc viết của chính blog này: không để lại dấu gạch dài (em dash) hay gạch giữa (en dash) trong văn bản. Cấu trúc thư mục như sau:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Còn tệp SKILL.md chỉ có chừng này:

```markdown
---
name: tire-denetimi
description: Tìm cách dùng dấu gạch dài (U+2014) và dấu gạch giữa (U+2013) trong các bài blog và đề xuất chỉnh sửa. Dùng khi người dùng chuẩn bị đăng một bài Markdown, nói "kiểm tra dấu gạch", "có đúng quy tắc viết không", hoặc dù không nhắc tên vẫn muốn một lần kiểm tra cuối trước khi đăng.
---

# Kiểm tra dấu gạch

1. Chạy lệnh `python scripts/tire_bul.py <dosya.md>`.
2. Với mỗi dòng trong kết quả, đề xuất thay dấu gạch bằng dấu chấm, dấu phẩy, dấu hai chấm hoặc ngoặc đơn.
3. Không đổi ý nghĩa. Hỏi người dùng về những dòng bạn không chắc.
4. Cuối cùng, báo trong một câu đã sửa bao nhiêu dòng.
```

Tài liệu Claude coi cửa sổ ngữ cảnh là "tài nguyên dùng chung" và khuyên chỉ thêm những thông tin mà mô hình chưa biết. Phần thân nên dưới 500 dòng. Văn bản tham khảo dài nên chuyển sang các tệp riêng, và liên kết đến các tệp này từ SKILL.md chỉ một cấp.

Quy tắc cho script cũng rõ ràng: "giải quyết, đừng đẩy cho người khác". Nghĩa là script phải tự xử lý các trường hợp lỗi, chứ đừng viết theo kiểu "cứ để nó sập, Claude sẽ tìm cách". Khi script chạy, chỉ kết quả của nó, chứ không phải mã, đi vào ngữ cảnh. Điều đó làm script đáng tin hơn hướng dẫn bằng lời cho những việc lặp lại và không chấp nhận sai.

> **Bạn có biết không?** Trong Claude Code, các "lệnh gạch chéo tùy chỉnh" cũ đã hợp nhất với skill. Tệp .claude/commands/deploy.md và .claude/skills/deploy/SKILL.md tạo ra cùng một lệnh /deploy. Nếu bạn không muốn một skill tự động kích hoạt, hãy thêm disable-model-invocation: true vào frontmatter và chỉ gọi nó bằng tay.

## Bước 4: Kiểm thử, rồi lại kiểm thử

Hướng dẫn thực hành tốt nhất của Claude khuyên chuẩn bị các kịch bản đánh giá trước khi viết tài liệu dài, và trong danh sách kiểm tra trước khi phát hành có ít nhất ba đánh giá cùng việc kiểm thử riêng trên các mô hình Haiku, Sonnet và Opus. Lý do đơn giản: một hướng dẫn chạy hoàn hảo trên Opus có thể cần nhiều chi tiết hơn cho Haiku.

Để kiểm thử việc kích hoạt, đề xuất của agentskills.io khá cụ thể: chuẩn bị khoảng 20 tin nhắn mẫu của người dùng. Trong đó 8 đến 10 tin nên kích hoạt skill, 8 đến 10 tin không nên. Những ví dụ phủ định có giá trị nhất là loại "suýt trúng", tức các tin nhắn dùng cùng từ ngữ nhưng đòi hỏi việc khác. Vì hành vi mô hình không giống nhau mỗi lần, nên khuyến nghị chạy mỗi tin vài lần (ban đầu là 3) và xem tỷ lệ kích hoạt.

| Mô tả kém | Mô tả tốt |
|---|---|
| "Giúp làm việc với PDF." | Nói rõ làm gì và khi nào dùng |
| Chỉ có chi tiết kỹ thuật | Mô tả ý định của người dùng |
| Bao hết mọi thứ | Cũng nói rõ không làm gì |

Cài đặt cũng đơn giản: trong Claude Code, chỉ cần đặt thư mục vào ~/.claude/skills/ (cá nhân) hoặc .claude/skills/ của dự án. Claude Code theo dõi các thư mục này và nhận ra thay đổi ngay trong cùng phiên mà không cần khởi động lại. Còn trên claude.ai, bạn có thể tải skill lên dưới dạng zip từ phần cài đặt.

Skill đầu tiên của bạn sẽ tự động hóa việc lặp đi lặp lại nào?
