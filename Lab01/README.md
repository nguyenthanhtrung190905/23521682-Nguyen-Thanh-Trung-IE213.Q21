# 23521682-Nguyen-Thanh-Trung-IE213.Q21
# [cite_start]Lab 01: MongoDB CRUD Operation [cite: 40]

## [cite_start]1. Mục tiêu [cite: 40]
* Thiết lập môi trường làm việc với MongoDB Atlas.
* Thực hiện các thao tác thêm, xóa, sửa, truy vấn (CRUD) dữ liệu bằng MONGOSH.
* Làm quen với các hàm xử lý dữ liệu nâng cao như Aggregate.

## [cite_start]2. Công cụ và Môi trường [cite: 41]
* **Database:** MongoDB Atlas (Cloud).
* **Công cụ quản lý:** MongoDB Compass.
* **Giao diện dòng lệnh:** MONGOSH (MongoDB Shell).

## [cite_start]3. Cách chạy chương trình [cite: 42]
1. Kết nối với Cluster qua Connection String trong MongoDB Compass.
2. Mở tab **MONGOSH** ở dưới cùng ứng dụng.
3. Chạy các lệnh trong file `solution.js` theo thứ tự từ câu 2.1 đến 2.10.

## [cite_start]4. Kết quả thực hiện [cite: 36, 43]
* Đã tạo database `23521682-IE213` và collection `employees`.
* Thực hiện thành công 10 yêu cầu truy vấn dữ liệu.
* Kết quả cuối cùng (Câu 2.10): Tính được tổng tuổi và tuổi trung bình theo từng tổ chức (UIT/USSH).

### [cite_start]Hình ảnh minh chứng [cite: 37]
*(Bạn hãy kéo thả các ảnh chụp màn hình MONGOSH của bạn vào đây)*

## [cite_start]5. Giải thích các phần chính [cite: 44]
* **InsertMany:** Thêm nhiều nhân viên cùng lúc vào database.
* **UpdateMany & $unset:** Cập nhật hàng loạt và xóa bỏ một trường thông tin cụ thể (middle name).
* **Aggregate:** Gom nhóm dữ liệu theo `organization` để thực hiện các phép tính toán thống kê.

## [cite_start]6. Liêm chính học thuật và AI [cite: 88, 101]
* [cite_start]Bài làm được thực hiện bởi sinh viên dưới sự hỗ trợ giải thích lỗi và cấu trúc từ AI (Gemini)[cite: 93, 96].
* [cite_start]Sinh viên cam kết hiểu rõ toàn bộ mã nguồn đã nộp[cite: 86].