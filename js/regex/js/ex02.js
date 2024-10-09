/*
Ký tự của biểu thức chính quy: /, ., [, ], +, ?, =, ... --> Muốn kiểm tra 
--> Thêm ký tự \ (escape)

Hoặc | , phủ định ^

Các ký hiệu viết tắt khác:
\d --> Đại diện cho số
\D --> Không phải là số
\w --> Chữ thường, hoa, số, _
\W --> Ngược lại của \w
\s --> Khoảng trắng
\S --> Không phải là khoảng trắng
*/

// const phone = "0388875179";
// const pattern = /^(0|\+84)[0-9]{9}$/;
// console.log(pattern.test(phone));

// const str = `@!@#$`;
// const pattern = /^[^a-zA-Z0-9 ]+$/;
// console.log(pattern.test(str));

// const username = "d12345";
// const pattern = /^[a-z_][a-z0-9_-]{4,}$/;
// console.log(pattern.test(username));

// const email = "";
// const pattern =
//   /^[a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@([a-zA-Z]|[a-zA-Z0-9-_]*[a-zA-Z0-9])\.([a-zA-Z0-9-_]*[a-zA-Z0-9]\.)*[a-zA-Z]{2,}$/;
// console.log(pattern.test(email));

// const content = `Xin chao anh em, toi la 0388875179 abc xyz 0123456789`;
// const pattern = /(0|\+84)\d{9}/g;
// console.log(content.match(pattern));

// Capturing Group: Kỹ thuật chụp lại 1 phần của biểu thức để trả về kết quả
// --> Thêm cặp ngoặc (). Lưu ý: không hỗ trợ với global

// const email = `hoangan.web@fullstack.edu.com`;
// const pattern =
//   /^([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9])@(?:[a-zA-Z]|[a-zA-Z0-9-_]*[a-zA-Z0-9])\.(?:[a-zA-Z0-9-_]*[a-zA-Z0-9]\.)*[a-zA-Z]{2,}$/;
// console.log(email.match(pattern));

// Thay thế
const content = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hoangan.web@edu.com facere laboriosam nulla praesentium quod hic, odit recusandae sed tenetur voluptatem ex enim cum nam sequi aspernatur hoangan.web@fullstack.edu.com doloribus saepe, perspiciatis ea?`;

const pattern =
  /(([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9])@(?:[a-zA-Z]|[a-zA-Z0-9-_]*[a-zA-Z0-9])\.(?:[a-zA-Z0-9-_]*[a-zA-Z0-9]\.)*[a-zA-Z]{2,})/g;
const result = content.replace(pattern, `<a href="$1" title="$2">$1</a>`);
document.body.innerHTML = result;
console.log(content.match(pattern));
/*
Đối sánh chuỗi: Chụp lại kết quả của biểu thức đưa vào giá trị sau khi thay thế 
(Dựa vào capturing group)

group 1 --> $1
group 2 --> $2
group 3 --> $3
group n --> $n
*/
