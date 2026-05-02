Lab05 - 23521682 - Nguyễn Thành Trung
src/
 ├── components/
 │    ├── movies-list.js  # Hiển thị danh sách phim và tìm kiếm
 │    ├── movie.js        # Chi tiết phim và danh sách review (Bài 3 & 4)
 │    └── login.js        # Đăng nhập người dùng (Bài 5)
 ├── services/
 │    └── movies.js       # Các hàm gọi API (Axios) kết nối Backend
 ├── App.js               # Cấu hình Route và Navigation bar
 └── index.js             # Điểm bắt đầu của ứng dụng
 Các chức năng đã hoàn thành

Bài 1: Kết nối Backend
Tạo MovieDataService sử dụng Axios.

Thiết lập các endpoint: getAll, get(id), find, v.v.

Bài 2: Danh sách phim
Hiển thị phim dưới dạng Card (Bootstrap).

Chức năng tìm kiếm theo tên phim hoặc xếp hạng (Rated).

Bài 3 & 4: Chi tiết phim & Review
Hiển thị poster, nội dung tóm tắt phim.

Sử dụng Moment.js để định dạng ngày tháng review.

Hiển thị nút Edit/Delete cho chủ sở hữu đánh giá.

🛠 Công nghệ sử dụng
ReactJS: Thư viện UI.

React Bootstrap: Giao diện người dùng.

React Router Dom: Điều hướng trang.

Axios: Kết nối API.

Moment.js: Xử lý thời gian.