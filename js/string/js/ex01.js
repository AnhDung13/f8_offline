/* 
Chuỗi bao gồm các ký tự được đặt trong dấu nháy 
Chuỗi là kiểu dữ liệu nguyên thủy
*/

// var a = "học lập trình không khó";
// console.log(a);

// để kiểm tra 1 biến hoặc 1 hàm có phải là kiểu chuỗi không thì dùng từ khóa type of

// if (typeof a === "string") {
//   console.log("đây là chuỗi");
// }

// ép kiểu dữ liệu khác về chuỗi

// var b = 10;
// b = b + "";
// console.log(typeof b);

/*
Các kiểu dữ liệu nguyên thủy sẽ bọc 1 đối tượng, trong đối tượng đố sẽ có các hàm xử
lý với kiểu dữ liệu tương ứng
*/

// console.log(a.length);

var str = "Học F8 lập trình tại F8";

// 1. length: trả về độ dài của chuỗi
// console.log(str.length);

// 2. charAt(): trả về ký tự theo index
// console.log(str.charAt(1));

// 3. charCodeAt(): trả về mã ASCII của ký tự theo index
// console.log(str.charCodeAt(0));

// 4. concat(): nối chuỗi

// console.log(str.concat("A", "B", "C"));

// 5. includes(): tìm chuỗi con trong chuỗi cha
// tìm thấy trả về true ngược lại là false

// console.log(str.includes("f8"));

// 6. indexOf(): Tìm chuỗi con trong chuỗi cha, nếu tìm thấy trả về index đầu tiên
// tìm được, ngược lại trả về -1

// 7. lastIndexOf(): Tìm chuỗi con trong chuỗi cha, nếu tìm thấy trả về index cuối cùng
// tìm được, ngược lại trả về -1

// console.log(str.lastIndexOf("F8"));

// 8. slide(start , end): cắt chuối từ index đến end-1
// console.log(str.slice(0, 3));
// console.log(str.slice(5));
// console.log(str.slice(-5));

// 9. replace(tukhoa, tuthaythe): thay thế từ khóa đầu tiên tìm được

// console.log(str.replace("F8", "F88"));

// 10. replaceAll(tukhoa, tuthaythe): thay thế hết từ khóa tìm được
// console.log(str.replaceAll("F8", "F88"));

// 11. split(): Tách chuỗi thành mảng dựa vào ký tự phân cách
// console.log(str.split(" "));

// 12. startsWith: kiểm tra chuỗi bắt đầu

// var pathname = "/khoa-hoc/fullstack.html";
// console.log(pathname.startsWith("/khoa-hoc"));

// 13. endsWith: kiểm tra chuỗi kết thúc

// console.log(pathname.endsWith(".html"));

// 14. toLowerCase(): chuyển thành chữ thường

// 15. toUpperCase(): chuyển thành chữ HOA

// 16. trim(): loại bỏ khoảng trắng đầu và cuối chuỗi

// var str = " Anh Dũng ";
// console.log(str);
// console.log(str.trim());

// 17. trimStart(): Loại bỏ khoảng trắng đầu chuỗi

// 18. trimEnd(); Loại bỏ khoảng trắng cuối chuỗi

// 19. match(): Cắt chuỗi dựa vào biểu thức chính quy

var content = `Hello anh em F8. Số điện thoại của tôi là 0987654321 và 0123456789`;
var pattern = /0\d{9}/g;
var phones = content.match(pattern);
console.log(phones);
