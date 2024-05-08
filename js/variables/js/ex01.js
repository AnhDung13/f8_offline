// Comment JS 1 dòng
/* 
Comment nhiều dòng
Comment nhiều dòng
Comment nhiều dòng
*/

// khai báo biến (Đặt tên theo quy tắc camelCase)
var user;
var customer;
var userID, username, email;
var course = "Fullstack Offline",
  age = 32;

// lưu ý: nếu 1 biến được khai báo nhưng không gán giá trị --> Giá trị mặc định sễ là undefined

console.log(user);
console.log(course);

// hiển thị nội dung lên trình duyệt

// document.write("Hello anh em");

// dùng DOM (Học sau)
// document.body.innerHTML = "học js không khó";

// lưu ý nội dung hiển thị lên trình duyệt có thể là thẻ html

// document.write("<h2> Hello anh em </h2>");
// document.write(course);

// var welcome = "<h2>Khóa học " + course + " tại f8 </h2>";
// welcome = welcome + "<h3>Dũng</h3>";
// document.write(welcome);
// năm 2015, js có bổ sung 1 cú pháp mới để thay thế dấu nháy đơn và nháy kép
// Backtick: ``

var welcome = `<h2>Khóa học ${course} tại F8</h2>
<h3>Dũng</h3>`;
document.write(welcome);

// biến trong JS có 2 cách khai báo khác : let, const --> học sau

// ?\khi khai báo biến khhong cần khai báo kiểm dứ liệt
