// Object: Đặc tả về 1 đối tượng cụ thể:
// ví dụ: Con người, người dùng, sản phẩm,...
/*
Cấu tạo bởi
- Thuộc tính (Biến)
- Phương thức (Hàm)

Cú pháp: 
var tenObject = {
    key1: value1,
    key2: value2,
    ...
}
--> Object Literal
*/
// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
//   "address-a": "Hà Nội",
// };
// // không chấp nhận gạch ngang nhưng nếu muốn thì thêm dấu nháy
// // user.address = "Hà Nôi"; // thêm mới (key không tồn tại)
// // user.name = "Hoàng An F8"; // sửa
// // delete user.age // xóa
// console.log(user);

// for (var key in user) {
//   console.log(user[key]); //computed property
// }
// Hàm tạo của object là Object

// nối 2 object
var obj1 = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
var obj2 = {
  age: 32,
  role: "Teacher",
};
var obj3 = {};

for (var key in obj1) {
  obj3[key] = obj1[key];
}
for (var key in obj2) {
  obj3[key] = obj2[key];
}
// console.log(obj3);

// Kiểm tra 1 biến có phải mảng hay không
var a = {};
if (typeof a === "object" && !Array.isArray(a) && a !== null) {
  console.log("is object");
}
if (a && a.constructor.name === "Object") {
  console.log("is object");
}
