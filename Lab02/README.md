# Lab 02: Xây dựng Backend cho ứng dụng Movie Reviews

## Thông tin sinh viên
- **Họ và tên:** Nguyễn Thành Trung
- **MSSV:** 23521682
- **Lớp:** IE213.Q21
- **Môn học:** Phát triển ứng dụng trên thiết bị di động

## Giới thiệu dự án
Dự án này là phần Backend (phía máy chủ) cho ứng dụng xem đánh giá phim. Hệ thống sử dụng Node.js và Express để tạo API, kết nối với cơ sở dữ liệu MongoDB Atlas để truy xuất dữ liệu phim thực tế.

## Công nghệ sử dụng
- **Ngôn ngữ:** JavaScript (ES Modules)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Cloud)
- **Thư viện bổ trợ:** `cors`, `dotenv`, `mongodb`, `nodemon`

## Cấu trúc thư mục Lab02
```text
📁 Lab02
├── 📁 movie-reviews
│   └── 📁 backend
│       ├── 📁 api
│       │   ├── movies.controller.js
│       │   └── movies.route.js
│       ├── 📁 dao
│       │   └── moviesDAO.js
│       ├── .env (Chứa chuỗi kết nối Database - Đã bỏ qua khi commit)
│       ├── .gitignore
│       ├── index.js
│       ├── package.json
│       └── server.js
└── 📁 (Các ảnh minh họa kết quả từ 1.1.png đến 2.7.png)
