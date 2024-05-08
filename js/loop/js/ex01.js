/* 
Vòng lặp:
- Cú pháp trong lập trình
- Cho phép đoạn chương trình chạy lặp đi lặp lại theo số lần nhất định

Có 2 loại vòng lặp
- Vòng lặp với số lần xác định trước 
--> for
- Vòng lặp với số lần không xác định trước
--> while, do while
*/

// Vòng lặp for
/*
for (inital; condition; step){
    code
}
*/
// for (var i = 1; i <= 10; i++) {
//   console.log("lần lặp thứ :", i);
// }
// for (var i = 1000; i > 1; i--) {
//   console.log("lần lặp thứ :", i);
// }
var n = 1000000000,
  total = 0;
tmp = 1;
for (var i = 1; i <= n; i++) {
  tmp *= i;
  total += tmp;
}
console.log(total);
