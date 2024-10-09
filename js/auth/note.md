# Authenticaton - Athorization

- Authentication: xác minh danh tính
- Authorization: xác minh quyền

2 cách xác thực (Authentication)

- Cookie-based Authentication
  Session --> lưu trữ phía server --> Trả về session_id cho trình duyệt thông qua Cookie

- Token-based Authentication
  Lưu trữ thông tin user vào token (JWT = Json Web Token)

## Đăng xuất

Yêu cầu đăng xuất --> Call API tới Server --> Lưu access Token vào Blacklist của Server
--> Lưu accessToken vào Blacklist của Server --> Xóa localStorage
