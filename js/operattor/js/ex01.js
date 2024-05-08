// Biểu thức toán tử và toán hạng

// s = a +b *c

// s, a, b, c --> toán hạng
//  =, +, * Toán tử

// 1. Toán tử số học

/*, +, -, *, 

%  --> chia lấy dư
** --> lũy thừa
++ --> Tăng lên 1 đơn vị
-- --> giảm đi 1 đơn vị
*/

// var a = 1;
// a++;
// a--;
// ++a;
// var b = ++a;
// console.log(a);
// console.log(b);

//2. toán tử gán

var a = 10;
// a += 10;
// a -= 10;
// a *= 10;
// a /= 10;
// a %= 10;
a **= 10;
// console.log(a);

//3. toán tử so sánh

/* 
>, <, >=, ==, ===, !=, !==

luôn trả về kiêu dữ liệu logic (boolean):
true, false

lưu ý: 
    == So sánh bằng nhưng chỉ so sánh giá trị 
    === So sánh bằng cả giá trị lẫn kiểu dữ liệu
    != So sánh khác nhưng chỉ so sánh giá trị
    !== So sánh khác cả giá trị lẫn kiểu dữ liệu
*/
// var a = 10;
// var check = a > 10;
// console.log(check);

//4. Toán tử lý luận (kết hợp)
/*
&& --> kết hợp and
|| --> kết hợp or
!  --> kết hợp not

Thứ tự ưu tiên: ngoặc tròn --> and --> or --> not
*/

var a = 10;
// var check = !(a >= 5 && a <= 15);
var check = a < 0 || (a >= 5 && a <= 15);
console.log(check);
// 5. Toán tử 3 ngôi
//Cú pháp: dieukien ? giatridung : giatrisai
// var a = 10;
// var b = a >= 10 ? "f8" : "dũng";
// console.log(b);

//6. Toán tử nullist (??)
// cú pháp: bien ?? giatri
// cách hoạt động: nếu bien !== undefined và bien !== null lấy bien, ngược lại lấy giatri

var x = null;
var result = x !== null && x !== undefined ? x : "F8";
console.log(result);

//Viết lại toán tử nullish bằng toán tử 3 ngôi
var a = 8,
  b = 2,
  c = 5,
  max;

var result = (max = a > b ? a : b) > c ? max : c;
console.log(result);

var a, b;
