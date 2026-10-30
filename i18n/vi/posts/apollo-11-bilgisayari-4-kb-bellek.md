---
title: "Máy tính của Apollo 11: \"4 KB bộ nhớ\" thực chất nghĩa là gì?"
excerpt: "Chiếc máy tính đưa Apollo 11 xuống Mặt Trăng có khoảng 4 KB RAM. Còn các chương trình nằm trong một bộ nhớ ROM khoảng 72 KB được dệt bằng dây."
hook: "Họ đáp xuống Mặt Trăng chỉ với 4 KB RAM"
fact: "4 KB"
factLabel: "Bộ nhớ xóa được (RAM) của AGC"
category: "Máy tính"
---
Chắc hẳn bạn đã nghe câu "bộ nhớ của chiếc máy tính bay lên Mặt Trăng còn nhỏ hơn cả một bức ảnh". Trong video, chúng tôi cũng nói "4 KB". Con số này đúng, nhưng riêng nó thì chưa đủ. Bởi vì Máy tính dẫn đường Apollo (Apollo Guidance Computer, gọi tắt là AGC) thực ra có hai bộ nhớ riêng biệt, và "4 KB" chỉ mô tả bộ nhớ nhỏ hơn trong số đó.

Hãy cùng mổ xẻ con số nổi tiếng này.

## "4 KB" chính xác là gì?

Bộ nhớ làm việc của AGC, tức bộ nhớ xóa được mà ngày nay ta gọi là RAM, gồm 2.048 "từ". Mỗi từ dài 16 bit: 15 bit dữ liệu và 1 bit chẵn lẻ (parity) để kiểm tra lỗi. Nếu tính một từ là 2 byte thì 2.048 từ xấp xỉ 4 KB. Nói cách khác, "4 KB" là kích thước của tờ giấy nháp mà máy tính dùng để tính toán trong chuyến bay.

Các chương trình không nằm trong bộ nhớ này. Ở đây chỉ chứa vị trí và vận tốc tức thời, các bộ đếm và kết quả trung gian được chuyển giữa các tác vụ. Bộ nhớ được làm từ những vòng nhỏ gọi là lõi từ (core) và giữ nguyên nội dung ngay cả khi mất điện.

Còn các chương trình nằm ở một nơi hoàn toàn khác: bộ nhớ cố định 36.864 từ, tức ROM. Theo cách tính tương tự, đó là khoảng 72 KB. Tóm lại, cách nói chính xác hơn là: Apollo 11 đáp xuống Mặt Trăng với khoảng 4 KB RAM và khoảng 72 KB ROM.

## Chương trình được dệt thành sợi dây

ROM của AGC là bộ nhớ "core rope" (dây lõi từ) và theo đúng nghĩa đen là được dệt bằng tay. Nếu một sợi dây đi xuyên qua một lõi từ thì bit đó là 1, còn nếu sợi dây đi vòng qua bên cạnh lõi thì bit đó là 0. Nghĩa là phần mềm được biến thành phần cứng bằng cách dệt, như dệt vải.

Công việc này do các nhân viên Raytheon ở Waltham, Massachusetts thực hiện. Theo nghiên cứu chi tiết của Ken Shirriff, một phần đáng kể số người được tuyển là phụ nữ đến từ ngành dệt may địa phương nhờ kỹ năng may vá. Dệt một mô-đun mất khoảng 8 tuần và tốn 15.000 đô la. Mỗi mô-đun chứa 6 nghìn từ, và sáu mô-đun hợp lại thành tổng cộng 36.864 từ.

Hệ quả của việc này rất quan trọng: phần mềm phải được chốt cứng từ nhiều tháng trước chuyến bay. Không có chuyện vá lỗi vào phút chót, bởi sửa một lỗi nghĩa là phải dệt lại.

> **Bạn có biết không?** Apollo 11 không có một mà có hai chiếc AGC: một chiếc trên Mô-đun Chỉ huy, một chiếc trên Mô-đun Mặt Trăng. Mỗi chiếc nặng khoảng 32 kg và chạy bằng đồng hồ thạch anh 2,048 MHz.

## Tiếng chuông báo động vài phút trước khi hạ cánh

Trong lần hạ cánh ngày 20 tháng 7 năm 1969, máy tính của Mô-đun Mặt Trăng trước tiên hiện cảnh báo 1202 trên màn hình, rồi đến 1201. Cả hai đều có nghĩa là "tràn bộ thực thi": máy tính bị giao nhiều việc hơn mức nó có thể xử lý. Theo phần mô tả chi tiết trên Wikipedia, nguyên nhân là các tín hiệu giả từ radar điểm hẹn, vốn đang để ở chế độ chờ, đã làm bộ xử lý bận rộn. Đó không phải lỗi lập trình, không phải lỗi của phi công, cũng không phải sự cố phần cứng. Về cơ bản, nó bắt nguồn từ một sai sót trong tài liệu giao diện giữa hai hệ thống.

Điều thú vị thật sự là phần mềm đã làm gì trong tình huống đó. AGC chạy với một bộ lập lịch dựa trên mức ưu tiên. Khi quá tải, nó nhanh chóng tự khởi động lại, bỏ các việc ưu tiên thấp và tiếp tục những nhiệm vụ quan trọng như điều khiển việc hạ cánh. Nghĩa là bộ nhớ nhỏ bé nổi tiếng ấy đã đủ dùng vì nó được quản lý một cách khôn ngoan.

Còn một chi tiết khiến mọi thứ khó khăn hơn. Lệnh 1668 mà Buzz Aldrin nhập vào máy tính trong lúc hạ cánh đã tăng thêm tải cho bộ xử lý vốn đã chật vật, và gây ra thêm một cảnh báo 1202. Phần mềm cũng vượt qua điều đó theo cách tương tự, và Đại bàng (Eagle) hạ cánh xuống bề mặt Mặt Trăng.

Phần mềm được phát triển tại Phòng thí nghiệm Thiết bị đo đạc của MIT. Phần mềm Mô-đun Chỉ huy (COLOSSUS) và phần mềm Mô-đun Mặt Trăng (LUMINARY) do các nhóm khác nhau thực hiện. Việc hiện thực hóa các chi tiết nằm ở nhóm do Margaret Hamilton dẫn dắt.

## Hồi đó / bây giờ

| Máy tính dẫn đường Apollo (1969) | Điện thoại ngày nay |
|---|---|
| Khoảng 4 KB bộ nhớ xóa được (RAM) | Hàng gigabyte RAM |
| Khoảng 72 KB ROM dệt tay | Hàng trăm gigabyte dung lượng lưu trữ |
| Cập nhật phần mềm mất nhiều tháng dệt | Bản cập nhật tự tải về ban đêm |
| Khoảng 32 kg | Vừa lòng bàn tay |

## Bài học thực sự của con số

Con số "4 KB" thường được kể kiểu "xem nó sơ khai đến mức nào". Nhưng cốt lõi của câu chuyện lại ngược lại: bộ nhớ hạn chế buộc các kỹ sư phải tính toán từng bit. Một phần mềm biết ưu tiên nhiệm vụ và tự phục hồi khi quá tải đã ra đời nhờ vậy.

Ngày nay, các thiết bị trong túi chúng ta có bộ nhớ nhiều đến mức không thể so sánh, nhưng phần lớn ứng dụng không được viết cẩn thận đến thế. Chỉ một bản cập nhật của một ứng dụng nhắn tin cũng có thể lớn gấp nhiều lần toàn bộ phần mềm của Apollo.

Theo bạn, giới hạn đào tạo nên kỹ sư giỏi hơn, hay sự dư dả mới làm được điều đó?
