var email = "hoangan.web@gmail.com";
// viết chương trình trả về username của email
/*
Bước 1: tìm index của ký tự @ --> dùng hàm indexOf()
Bước 2: Cắt từ đầu đến index vừa tìm được
*/
var username = email.slice(0, email.indexOf("@"));
console.log(username);

// viết 1 hàm kiểm tra 1 chuỗi xem có phải chữ hoa hay không
function isUpper(str) {
  return str === str.toUpperCase();
}

console.log(isUpper("TẠ HOÀNG AN"));
