// Biểu thức chính quy
// - Biểu thức để xử lý chuỗi nâng cao
// - Viết bằng ngôn ngữ Perl
// - 3 chức năng chính: so khớp, cắt chuỗi, thay thế
// --> Học cách viết các biểu thức

// Cú pháp: /regex/modifier||flag
// Ví dụ const pattern = /hoangan/g
// const pattern = /hoangan/g;
// const pattern = new RegExp("hoangan", "g");
// console.log(pattern);

// Các hàm xử lý regex trong JS
// 1. test() --> So khớp
// 2. match() --> Cắt chuỗi
// 3. replace() --> Thay thế

// Các ký hiệu cơ bản
/*
string --> Khớp string có nằm trong chuỗi hay không
^ --> khớp biểu thức ở đầu chuỗi
$ --> khớp biểu thức ở cuối chuỗi
[min-max] --> Khớp các ký tự từ min đến max
Lưu ý: min, max có thể là: ký tự hoa, ký tự thường, số
[char_list] --> Danh sách các ký tự muốn kiểm tra 
Lưu ý: trong 1 cặp ngoặc [] có thể đưa nhiều điều kiên tuy nhiên sẽ được kết hợp với nhau theo điều kiệu HOẶC
{min, max} --> thiết lập độ dài cho biểu thức từ min đến max ký tự
{min, } --> Độ dài >= min ký tự
{value} --> Độ dài cố định
Ký hiệu viết tắt độ dài
{0,} --> *
{1,} --> +
{0,1} --> ?
*/

const str = "tahoangan";
const pattern = /[]/;
console.log(pattern.test(str));
