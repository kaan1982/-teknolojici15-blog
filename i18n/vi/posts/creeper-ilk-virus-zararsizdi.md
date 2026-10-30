---
title: "\"Virus\" máy tính đầu tiên, Creeper, không xóa gì cả"
excerpt: "Creeper lang thang trên ARPANET năm 1971 không động đến dữ liệu nào, chỉ in ra màn hình một lời thách thức. Phần mềm diệt virus đầu tiên, Reaper, được viết để bắt nó."
hook: "Virus đầu tiên không xóa gì cả!"
fact: "1971"
factLabel: "Creeper được viết tại BBN"
category: "Máy tính"
---

Nhắc đến "virus máy tính", ta nghĩ ngay đến thứ xóa tệp, bắt cóc dữ liệu, khóa màn hình. Nhưng chương trình mà phần lớn các nguồn gọi là "virus đầu tiên" chẳng làm điều nào trong số đó. Tất cả những gì nó làm là in một lời thách thức nhỏ lên màn hình rồi chuyển sang máy tính tiếp theo.

Tên nó là Creeper, nghĩa là "kẻ bò".

## 1971, BBN và ARPANET

Creeper được Bob Thomas viết năm 1971 như một chương trình thử nghiệm tại công ty BBN (Bolt Beranek and Newman) ở Massachusetts. BBN là công ty đóng vai trò then chốt trong việc xây dựng ARPANET, được xem là tổ tiên của internet.

Chương trình di chuyển giữa các máy chủ DEC PDP-10 kết nối với ARPANET và chạy hệ điều hành TENEX. Theo Wikipedia, vào thời điểm đó số hệ thống chạy TENEX trên ARPANET là 28, tức là số máy tính tối đa mà Creeper có thể tiếp cận.

Mối bận tâm thực sự của Bob Thomas không phải là điều ác, mà là trả lời một câu hỏi: một chương trình có thể tự di chuyển từ máy này sang máy khác trên mạng không?

## Một câu duy nhất trên màn hình

Khi đến một máy, Creeper in thông điệp sau lên teletype (thiết bị đầu cuối có máy in):

"I'M THE CREEPER : CATCH ME IF YOU CAN"

Nghĩa là: "Tôi là Creeper: bắt tôi nếu bạn làm được." Vậy thôi. Nó không xóa tệp nào, không làm hỏng dữ liệu nào. Wikipedia cho biết các nhân viên vận hành đã hợp tác trong thử nghiệm này và không có tác động ngoài ý muốn nào được báo cáo.

Bản đầu tiên thậm chí còn không tự sao chép: khi chuyển từ máy này sang máy khác, nó di chuyển mà không để lại bản sao phía sau. Sau đó Ray Tomlinson, người sau này được biết đến là cha đẻ của email, đã sửa chương trình để nó tự sao chép sang các máy khác. Phiên bản tự nhân bản này được coi là con sâu máy tính (worm) đầu tiên được công nhận rộng rãi.

## Virus hay sâu?

Ở đây cần một chỉnh sửa nhỏ nhưng quan trọng. Về mặt kỹ thuật, Creeper không phải virus mà là một con sâu. Virus lây lan bằng cách bám vào một chương trình hay tệp khác; còn sâu tự di chuyển trên mạng. Creeper thuộc nhóm thứ hai. Dù vậy, nhiều ấn phẩm vẫn gọi nó là "virus máy tính đầu tiên trên thế giới"; một trích dẫn từ Guardian mà Wikipedia dẫn lại cũng dùng đúng cách nói này. Đó là cách hiểu phổ biến của khái niệm, nhưng nhãn đúng về mặt kỹ thuật là "con sâu đầu tiên".

Bản thân thuật ngữ "virus máy tính" ra đời 12 năm sau Creeper. Theo bài viết WeLiveSecurity của ESET, ngày 3 tháng 11 năm 1983, Fred Cohen, khi đó là sinh viên Đại học Nam California, viết một chương trình tự lan truyền; thầy của anh là Len Adleman so sánh kiểu lan truyền giống "lây nhiễm" này với virus sinh học và đề xuất thuật ngữ đó. Cohen đã chuẩn bị chương trình trên một chiếc VAX 11/750 chạy Unix, mất khoảng tám giờ làm việc.

> **Bạn có biết không?** Ray Tomlinson, người phát minh ra email và đưa ký hiệu @ vào địa chỉ, cũng chính là tác giả của chương trình được coi là phần mềm diệt virus đầu tiên. Nghĩa là cùng một người đã viết ra công cụ được yêu thích nhất của internet lẫn "người dọn dẹp" đầu tiên của nó.

## Reaper: phần mềm diệt virus đầu tiên

Khi đã có một chương trình tự sao chép trên mạng, nhu cầu về thứ ngăn nó cũng xuất hiện. Năm 1972, Ray Tomlinson viết một chương trình tên Reaper ("Thần Gặt"). Reaper cũng lang thang trên ARPANET và xóa Creeper ở bất cứ đâu tìm thấy. Wikipedia mô tả nó là phần mềm diệt virus đầu tiên.

Câu chuyện này có một sự trớ trêu thú vị: phần mềm diệt virus đầu tiên trên thế giới thực ra cũng là một chương trình tự lang thang trên mạng. Nghĩa là để bắt một "con sâu", người ta đã viết một "con sâu" khác.

| Hồi đó | Bây giờ |
|---|---|
| 1971: tối đa 28 máy TENEX | Hàng tỷ thiết bị kết nối |
| Một câu đùa duy nhất trên màn hình | Mã độc tống tiền, trộm dữ liệu |
| Reaper: người dọn dẹp với một mục tiêu | Phần mềm bảo mật được cập nhật liên tục |

## Cái bóng dài của một thử nghiệm ngây thơ

Creeper vô hại nhưng đã mở ra một cánh cửa: nếu một chương trình có thể tự lan truyền trên mạng, thì sẽ có người dùng sức mạnh đó cho mục đích xấu. Trong những thập kỷ sau, điều đó đã xảy ra, và các từ "virus", "sâu", "diệt virus" đi vào ngôn ngữ hằng ngày của chúng ta.

Ngày nay, nếu một nhà nghiên cứu bảo mật thả một thử nghiệm tương tự lên internet mà không xin phép, rất có thể anh ta sẽ gặp rắc rối nghiêm trọng. Còn ARPANET năm 1971 là một cộng đồng nhỏ gồm các nhà nghiên cứu quen biết nhau, và thử nghiệm được tiến hành với sự hợp tác của các nhân viên vận hành, như Wikipedia ghi lại.

Dù vậy, điểm xuất phát không phải là một cuộc tấn công mà là sự tò mò. Một kỹ sư hỏi "liệu có làm được không nhỉ?" và đưa ra câu trả lời chỉ bằng một câu trên màn hình.

Theo bạn, nếu Creeper được viết hôm nay, nó sẽ bị coi là một thử nghiệm vô hại hay một vụ xâm phạm bảo mật?
