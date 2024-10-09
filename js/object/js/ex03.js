// Prototype: Object dùng để kế thừa các phương thức, thuộc tính
// Object.prototype.combineValue = function () {
//   // Nối tất cả giá trị của các key thành 1 mảng
//   // this: Đại diện cho obj hiện tại
//   var array = [];
//   var _this = this;
//   Object.keys(this).forEach(function (key) {
//     var value = _this[key];
//     if (typeof value !== "function") {
//       array.push(value);
//     }
//   });
//   return array;
// };
// String.prototype.last = function () {
//   return this.split(" ").slice(-1).join("");
// };
// var user = {
//   name: "Hoàng An",
//   email: "hoanganwweb@gmail.com",
// };
// console.log(user);
// console.log(user.combineValue());
// var course = {
//   name: "Fullstack",
//   price: 1000,
// };
// console.log(course.combineValue());

// var fullname = "Hoàng An F8";
// var arr = [];
// var age = 32;
// var check = false;
// var getMessage = function () {};
// console.log(fullname.last());

var user = ["User 1", "User 2", "User 3", "User 4"];
Array.prototype.map2 = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    var value = this[i];
    var result = callback(value, i);
    newArr[newArr.length] = result;
  }
  return newArr;
};
var newArr = user.map2(function (user, index) {
  return `<h3>${index + 1} - ${user}</h3>`;
});

console.log(newArr);
