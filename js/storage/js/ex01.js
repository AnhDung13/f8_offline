/*
Storage: Bộ nhớ trình duyệt
1. localStorage
- Lưu trữ không giới hạn thời gian
- Dung lượng lớn: khoảng 10mb
- Chỉ lưu trữ được text
- Server không thể đọc, ghi
- Phân biệt theo origin: scheme + hostname + port
2. sessionStorage
- Lưu trữ theo phiên (Tắt trình duyệt sẽ bị xóa)
3. cookie
- Lưu trữ theo phiên hoặc theo thời gian chỉ định
- Dung lượng nhỏ: khoảng 4kb
- Chỉ lưu chữ text
- Server có thể đọc ghi (Làm việc thông qua http request, http response)
- Phân biệt theo path
- Cookie có thể share tới tất cả tên miền con (subdomain)

Trong cùng tên miền: set cookie /a và /b 
*/

if (typeof Storage !== undefined) {
  //   localStorage.setItem("email", "contact@fullstack.edu.vn");
  //   console.log(localStorage.getItem("email"));
  //   localStorage.removeItem("email");
  //   localStorage.clear();// Xóa tất cả
  //   localStorage.email = "mail@mail.com"
  //
}

//Cookie
//- Tạo cookie ở phía client
// document.cookie = "name=An;max-age=6;path=/";

// - Xóa cookie
document.cookie = `name=;expires=${new Date().toUTCString()};path=/`;
