## 🚀 Mục tiêu của Lab 03 (Lab này làm gì?)
Trong bài thực hành Lab 03 này, mục tiêu chính là hoàn thiện phần Backend cho ứng dụng, cụ thể bao gồm các công việc sau:

1. **Thiết lập DAO (Data Access Object):** Viết các hàm để kết nối và tương tác trực tiếp với cơ sở dữ liệu MongoDB Atlas.
2. **Quản lý Review (Bình luận):** Xây dựng các API cho phép người dùng Thêm (POST), Sửa (PUT), và Xoá (DELETE) bình luận của chính họ trên một bộ phim.
3. **Truy vấn nâng cao:** Viết API lấy thông tin chi tiết của 1 bộ phim. (Sử dụng toán tử `$lookup` của MongoDB để gộp dữ liệu từ bảng `movies` và bảng `reviews` lại với nhau).
4. **Kiểm thử (Testing):** Sử dụng phần mềm Insomnia để giả lập Client, gọi và kiểm tra độ chính xác của toàn bộ các API vừa viết.