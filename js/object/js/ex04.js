var person1 = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
  getInfo: function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  },
};

// cấu trúc của Object
// - Có những thuộc tính nào ?
// - Có những phương thức nào
// Giải pháp: Tạo 1 function constructor --> Định nghĩa cấu trúc của object
// Nguyên tắc của Function Constructor
/*
- Tên hàm phải là danh từ
- Đặt tên theo quy tắc PascalCase (Ký tự đầu của mỗi từ sẽ viết hoa)
Ví dụ: UserService, UserCource, ResetPasswordService,...
*/
function Person(name, email, age) {
  // thuộc tính
  this.name = name;
  this.email = email;
  this.age = age;
  this.a = "Học JS";
  // phương thức
  this.getInfo = function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  };
  return 1;
}
// Person.prototype.message = "học js";
// var person1 = new Person("Hoàng An 1", "hoangan1@gmail.com", 32);
// console.log(person1);

// // Kiểm tra 1 object được tạo từ hàm tạo nào ?
// console.log(person1.constructor.name);

// thuộc tính tĩnh, phương thức tĩnh
/*
- không phụ thuộc vào object
- truy cập trực tiếp từ constructor (Hàm tạo)
ví dụ: Array.isArray(), Object.keys(), Object.value(),...
*/
// stactic property
Person.message = "hello ae";
// static method
Person.getMessage = function () {
  return "Học js không khó";
};

Person.something = function () {
  console.log("something");
  console.log(new this().a);
};
Person.something();
// var person1 = new Person("Hoàng An 1", "hoangan1@gmail.com", 32);
// console.log(person1.constructor.message);

// this trong phương thức tĩnh là constructor
// this trong phương thức thông thường là object
