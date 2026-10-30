---
title: "Vấn đề năm 2038: vì sao một số máy tính sẽ quay về năm 1901?"
excerpt: "Thời gian Unix 32 bit sẽ cạn vào 03:14:07 UTC ngày 19 tháng 1 năm 2038, và các hệ thống cũ có thể tưởng nhầm đó là ngày 13 tháng 12 năm 1901. Vấn đề 2038 là gì và được giải quyết ra sao?"
hook: "Máy tính sẽ quay về năm 1901!"
fact: "03:14:07"
factLabel: "19 tháng 1 năm 2038, UTC: giới hạn 32 bit"
category: "Máy tính"
---
Khi bước vào năm 2000, cả thế giới từng bàn tán về một lỗi máy tính mang tên "Y2K". Giờ đây lại có một mốc thời gian khác đang đến gần: ngày 19 tháng 1 năm 2038. Vào ngày đó, chỉ cần vượt qua 03:14:07 (UTC) một giây, một số máy tính cũ có thể đột ngột đưa lịch của chúng về năm 1901. Đây không phải kịch bản khoa học viễn tưởng, mà là một bài toán đơn giản.

## Máy tính đếm thời gian như thế nào?

Unix và rất nhiều hệ thống phát triển từ nó không lưu thời gian dưới dạng đồng hồ hay lịch, mà dưới dạng một con số duy nhất. Con số này là số giây trôi qua kể từ nửa đêm ngày 1 tháng 1 năm 1970 (UTC). Nó được gọi là "thời gian Unix".

Vấn đề là ở nhiều hệ thống cũ, con số này được lưu dưới dạng số nguyên 32 bit có dấu. Giá trị lớn nhất của một số 32 bit có dấu là 2.147.483.647, tức 2 mũ 31 trừ 1. Chừng đó giây tương đương khoảng 68 năm. "Có dấu" nghĩa là một bit được dành ra để cho biết số đó dương hay âm. Vì vậy chỉ có 31 bit, chứ không phải cả 32, được dùng để biểu diễn độ lớn.

Cộng 68 năm vào năm 1970, ta đến năm 2038. Phép tính cho ra chính xác thời điểm 03:14:07 UTC ngày 19 tháng 1 năm 2038.

## Một giây sau đó sẽ xảy ra chuyện gì?

Một giây sau khi bộ đếm chạm giá trị lớn nhất, nó sẽ tràn. Hãy nghĩ đến đồng hồ đo quãng đường cơ học kiểu cũ trên ô tô: sau 999.999 nó quay về 000.000. Ở đây cũng xảy ra điều tương tự, nhưng vì là số có dấu nên giá trị chuyển thành một số âm rất lớn.

Một hệ thống bị ảnh hưởng sẽ hiểu số âm này là số giây đếm ngược về trước năm 1970. Kết quả: ngày tháng hiện ra là 13 tháng 12 năm 1901, lúc 20:45:52 (UTC). Một chiếc máy tính đột nhiên lùi lại 136 năm; chứng chỉ, bộ hẹn giờ, nhật ký và các phép so sánh ngày tháng đều có thể bắt đầu hoạt động sai.

> **Bạn có biết không?** Vấn đề này thậm chí đã xuất hiện ở một số phần mềm mà không cần chờ đến năm 2038. Theo Wikipedia, năm 2006 phần mềm AOLserver đã vượt qua giới hạn 2038 và bị sập vì đặt một giá trị hết hạn lùi về tương lai một tỷ giây. Nói cách khác, bất kỳ chương trình nào tính toán "một ngày trong tương lai" đều có thể chạm giới hạn ngay từ bây giờ. Một giới hạn 32 bit tương tự cũng gây rắc rối cho Microsoft Exchange vào năm 2022: số phiên bản của một bản cập nhật bị đọc như một dấu thời gian và vượt quá giới hạn, khiến các chức năng quét phần mềm độc hại ngừng hoạt động.

## Ai đang gặp rủi ro?

Phần lớn điện thoại và máy tính hiện đại mà bạn dùng hằng ngày nay đã dùng giá trị thời gian 64 bit. Rủi ro thực sự nằm ở những hệ thống chạy suốt nhiều năm mà không được cập nhật. Wikipedia đặc biệt nhấn mạnh các hệ thống cũ (legacy) và hệ thống nhúng: thiết bị điều khiển công nghiệp, một số thiết bị mạng, hệ thống trên xe hơi, tức những cỗ máy được lắp một lần rồi bị lãng quên.

Vì những thiết bị này ít được cập nhật, khi năm 2038 đến, bên trong chúng có thể vẫn còn một bộ phận đếm thời gian bằng 32 bit.

| Thời gian có dấu 32 bit | Thời gian có dấu 64 bit |
|---|---|
| Giá trị lớn nhất 2.147.483.647 | Phạm vi lớn hơn rất nhiều |
| Giới hạn: 19 tháng 1 năm 2038 | Giới hạn: khoảng 292 tỷ năm nữa |
| Hệ thống cũ và hệ thống nhúng | Hệ điều hành hiện đại |

## Giải pháp: một bộ đếm lớn hơn

Khó khăn ở đây mang tính thực tế nhiều hơn là kỹ thuật. Thay đổi kích thước của con số lưu thời gian có thể ảnh hưởng đến mọi chương trình, mọi định dạng tệp và mọi trường cơ sở dữ liệu sử dụng nó. Sửa một dòng thì dễ; còn tìm ra và cập nhật toàn bộ phần mềm bên trong một thiết bị có thể mất nhiều năm.


Về ý tưởng, giải pháp rất đơn giản: lưu thời gian bằng một số có dấu 64 bit. Theo Wikipedia, cách này đẩy thời điểm tràn lùi ra xa khoảng 292 tỷ năm nữa, tức là vượt xa tuổi hiện tại của vũ trụ.

Quá trình chuyển đổi này đã diễn ra nhiều năm. Theo bản tin tháng 1 năm 2020 của Phoronix, Linux 5.6 đang được chuẩn bị để trở thành phiên bản nhân chính đầu tiên có thể làm nền tảng cho các hệ thống 32 bit tiếp tục chạy sau năm 2038. Wikipedia cho biết Linux 5.6, ra mắt năm 2020, đã bổ sung hỗ trợ thời gian 64 bit cho các kiến trúc 32 bit. Để điều này phát huy tác dụng, các ứng dụng cũng cần được biên dịch lại với thời gian 64 bit.

Một đề xuất khác là chuyển con số sang dạng không dấu (unsigned). Nhưng cách này chỉ dời giới hạn đến năm 2106 và làm hỏng việc dùng các ngày tháng trước năm 1970. Vì vậy, hướng đi chính vẫn được xem là chuyển sang 64 bit.

Y2K đã không biến thành một thảm họa lớn vì mọi người đã làm việc từ trước; theo bạn, trong những năm còn lại đến 2038, liệu sự hy sinh thầm lặng ấy có được lặp lại không?
