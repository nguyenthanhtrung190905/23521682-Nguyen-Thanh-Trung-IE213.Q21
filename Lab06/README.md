# Lab 06 - 23521682 - Nguyễn Thành Trung

## 📁 Cấu trúc thư mục (Nâng cấp từ Lab 05)
Lab06/
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── add-review.js   # Chức năng Thêm/Sửa đánh giá (Mới)
    │   │   ├── login.js        # Đăng nhập người dùng
    │   │   ├── movie.js        # Chi tiết phim & Xóa đánh giá (Cập nhật)
    │   │   └── movies-list.js  # Danh sách phim & Phân trang (Cập nhật)
    │   ├── services/
    │   │   └── movies.js       # API kết nối Backend (POST, PUT, DELETE)
    │   ├── App.js               # Quản lý Routes & User State
    │   └── index.js             # Entry point
    └── package.json
---

## 🚀 Các chức năng đã hoàn thành trong Lab 06

### Bài 1: Quản lý đăng nhập nâng cao
- Tích hợp `user` state từ `App.js` vào toàn bộ hệ thống.
- Hiển thị nút **Logout** và tên người dùng ngay trên thanh Navbar sau khi đăng nhập thành công.
- Chỉ cho phép người dùng đã đăng nhập mới có quyền sử dụng chức năng Review.

### Bài 2: Thêm và Chỉnh sửa đánh giá (Add/Edit Review)
- Xây dựng Component `AddReview` đa năng:
    - **Chế độ Thêm:** Form trống để người dùng tạo đánh giá mới.
    - **Chế độ Sửa:** Tự động điền nội dung đánh giá cũ vào Form thông qua `useLocation`.
- Kết nối API `createReview` và `updateReview`.

### Bài 3: Xóa đánh giá và Phân trang (Delete & Pagination)
- **Xóa Review:** Thêm hàm `deleteReview` vào trang chi tiết phim, cho phép người dùng gỡ bỏ đánh giá của mình và cập nhật giao diện ngay lập tức.
- **Phân trang:** - Thêm nút **"Get next results"** tại trang danh sách phim.
    - Quản lý trạng thái trang bằng `currentPage` và `entriesPerPage`.
    - Hỗ trợ phân trang cho cả tìm kiếm theo tên và theo xếp hạng (Rated).

---

## 🛠 Công nghệ sử dụng
- **ReactJS & React Router Dom**: Quản lý điều hướng và trạng thái ứng dụng.
- **React Bootstrap**: Xây dựng giao diện Responsive và các Form nhập liệu.
- **Axios**: Thực hiện các phương thức HTTP (GET, POST, PUT, DELETE) tới Backend.
- **Hooks (useState, useEffect, useParams, useLocation)**: Xử lý logic và vòng đời component.

---

## 👤 Thông tin sinh viên
- **Họ tên:** NGUYỄN THÀNH TRUNG
- **MSSV:** 23521682