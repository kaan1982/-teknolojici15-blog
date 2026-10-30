---
title: "Skill tài liệu: dạy tác tử làm việc với Word, Excel, PowerPoint và PDF"
excerpt: "Các skill docx, xlsx, pptx và pdf của Anthropic làm được gì và chạy ở đâu? Những skill chính thức và skill hỗ trợ thực sự hữu ích cho việc tạo tài liệu."
hook: "Báo cáo, bảng tính, bài thuyết trình: tất cả là một skill"
fact: "4 TÀI LIỆU"
factLabel: "Số skill tài liệu có sẵn"
category: "Trí tuệ nhân tạo"
---

Bảo AI "soạn cho tôi một bản báo cáo" thì dễ. Khó là báo cáo ấy đến tay bạn thành một tệp Word hay Excel mở được thật, không vỡ định dạng, công thức chạy đúng. Danh mục đầu tiên, và có lẽ được dùng nhiều nhất, của skill chính là điều này: tài liệu văn phòng. Trong bài này chúng tôi chỉ nói đến những skill mà chúng tôi đã xác minh là có tồn tại.

## Bốn viên đá nền: docx, xlsx, pptx, pdf

Theo tài liệu của Claude, Anthropic cung cấp sẵn (pre-built) bốn skill tài liệu. Chúng chạy phía sau tính năng tạo tệp của Claude và Anthropic công bố mã nguồn trên kho GitHub anthropics/skills.

| Skill | Làm gì? (theo mô tả chính thức) |
|---|---|
| docx | Tạo, đọc, chỉnh sửa tài liệu Word. Bao gồm định dạng và mẫu |
| xlsx | Mở, chỉnh sửa bảng tính, thêm công thức và biểu đồ, làm sạch dữ liệu lộn xộn |
| pptx | Tạo bài thuyết trình, chỉnh slide, đọc và phân tích nội dung .pptx |
| pdf | Trích xuất văn bản và bảng, gộp, tách PDF, điền biểu mẫu, thêm hình mờ |

Các mô tả trong kho được viết khá "quyết liệt". Ví dụ mô tả của skill pptx yêu cầu dùng nó mỗi khi một tệp .pptx xuất hiện "theo bất kỳ cách nào", dù là đầu vào hay đầu ra. Đây là một ví dụ chính thức cho quy tắc "mô tả là thứ kích hoạt" mà chúng tôi đã nói ở bài trước.

## Bạn dùng ở đâu?

Tính đến tháng 10/2026, theo tài liệu Claude, bốn skill này tự động hoạt động khi tạo tài liệu trên claude.ai và cũng có thể được gọi như skill dựng sẵn trong Claude API. Còn trong Claude Code, các skill tài liệu dựng sẵn không đi kèm sẵn. Nhưng kho anthropics/skills có thể được thêm vào như một chợ plugin cho Claude Code và có thể cài gói document-skills. Theo hướng dẫn trong kho, trước hết thêm chợ bằng lệnh /plugin marketplace add anthropics/skills rồi cài document-skills@anthropic-agent-skills.

Về giấy phép có một sự phân biệt. Nhiều skill trong kho là mã nguồn mở theo Apache 2.0. Nhưng bốn skill tài liệu được chia sẻ dưới dạng "không phải mã nguồn mở, nhưng xem được mã nguồn" (source-available). Nghĩa là bạn có thể đọc mã để học, nhưng trước khi phân phối lại tự do trong sản phẩm của mình thì cần đọc tệp giấy phép.

> **Bạn có biết không?** Skill pdf là ví dụ kinh điển của việc nạp dần. Theo bài viết kỹ thuật của Anthropic, hướng dẫn điền biểu mẫu được tách khỏi SKILL.md chính sang một tệp forms.md riêng. Claude chỉ đọc tệp này khi thực sự điền biểu mẫu. Hiện trong thư mục pdf của kho có cả forms.md, reference.md và một thư mục scripts.

## Những trợ thủ bên cạnh tài liệu

Tạo tài liệu không chỉ dừng ở định dạng tệp. Trong kho anthropics/skills còn có các ví dụ chính thức khác tập trung vào phần nội dung:

- **doc-coauthoring:** Cung cấp quy trình từng bước để cùng viết các văn bản có cấu trúc như đặc tả kỹ thuật, đề xuất, tài liệu quyết định. Đi qua các giai đoạn truyền đạt bối cảnh, chỉnh sửa lặp và kiểm chứng.
- **internal-comms:** Tập hợp tài nguyên giúp viết các văn bản truyền thông nội bộ như báo cáo tình hình, cập nhật cho ban lãnh đạo, bản tin công ty, câu hỏi thường gặp theo định dạng công ty ưa chuộng. Trong thư mục cũng có văn bản mẫu.
- **brand-guidelines:** Áp dụng màu sắc và kiểu chữ thương hiệu chính thức của Anthropic vào một sản phẩm. Giá trị thật sự của nó là cho thấy cách bạn có thể dựng cái tương tự cho thương hiệu của mình.
- **theme-factory:** Chứa 10 chủ đề màu sắc và phông chữ dựng sẵn có thể áp dụng cho slide, tài liệu, báo cáo hoặc trang HTML, và nếu muốn thì tạo ngay một chủ đề mới.

Trung tâm trợ giúp còn nhắc đến các skill do những đối tác như Notion, Figma và Atlassian chuẩn bị để chạy cùng các trình kết nối MCP của họ. Chúng hữu ích khi làm việc với công cụ nơi tài liệu được tạo ra (ví dụ trang Notion).

## Dùng trong đời thực thế nào?

Cách dùng hiệu quả nhất là kết hợp các skill tài liệu dựng sẵn với một skill nhỏ của riêng bạn. Ví dụ skill xlsx biết cách tạo Excel đúng chuẩn, nhưng không biết bảng doanh số hằng tháng của công ty bạn cần những cột nào. Nếu bạn viết một skill ngắn mô tả điều đó, hai skill sẽ cùng làm việc để cho ra một tệp vừa đúng định dạng vừa đúng chuẩn của bạn.

Có hai lưu ý đừng quên. Thứ nhất, kho anthropics/skills ghi rõ các skill này là "để minh họa và đào tạo" và hành vi riêng của Claude có thể khác với các triển khai ở đây. Thứ hai, skill tài liệu cần một môi trường chạy mã. Theo Trung tâm trợ giúp, để skill hoạt động cần bật tính năng thực thi mã.

Bài tiếp theo chúng ta sang phía màn hình: các skill tạo thiết kế, giao diện và sản phẩm web.

Bạn mất nhiều thời gian nhất khi chuẩn bị loại tài liệu nào: bảng tính, bài thuyết trình hay báo cáo?
