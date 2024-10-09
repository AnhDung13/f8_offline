// var users = ["An", "Dương", "Dũng", "Tâm", "Hạnh"];
// // sort(): Sắp xếp mảng theo ký tự tăng dần
// // sắp xếp theo ký tự: a, b, c
// /*
// Lưu ý: hàm sort nhận vào 1 callback
// function callbackSort (a, b){
//     a: phần tử sau
//     b: phần tử trước
//     nếu hàn này trả về giá trị âm --> tự động đổi chỗ
// }
// */

// users.sort();
// console.log(users);

// var numbers = [5, 1, 2, 100, 10];
// numbers.sort(function (a, b) {
//   // sắp xếp tăng dần
//   // phần tử trước < phần tử sau
//   // cần xử lý: Nếu phần tử trước > phần tử sau -> đổi chỗ
//   if (a < b) {
//     return -1;
//   }
// });
// console.log(numbers);

// var users = [
//   "Tạ Hoàng An",
//   "Lưu Anh Quân",
//   "Lê Đức Nam",
//   "Đăng Ngọc Sơn",
//   "Trần Công Lực",
// ];
// // sắp xếp mảng theo thứ tự tăng dần (theo tên)
// var getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };
// users.sort(function (a, b) {
//   if (getFirstName(a) < getFirstName(b)) {
//     return -1;
//   }
// });
// console.log(users);

// Vòng lặp

// var users = ["Item 1", "Item 2", "Item 3", "Item 4"];
// // forEach(callback): Duyệt từng phần tử của mảng
// /*
// Callback sẽ có 3 tham số
// - value
// - index
// - array: mảng ban đầu
// */

// // users.forEach(function (value, index) {
// //   console.log(value, index);
// // });

// // map(callback)
// /*
// - Duyệt qua từng phần tử của mảng ban đầu
// - trả về 1 mảng mới có số lượng phần tử mảng ban đầu
// - giá trị của mảng mới là return của call back
// */
// // var newArr = users.map(function (value, index) {
// //   console.log(value, index);
// //   return `${index + 1} - ${value}`;
// // });
// // console.log(newArr);

// // filter(callback)
// /*
// - Duyệt qua từng phần tử của mảng ban đầu
// - Trả về 1 mảng mới, giá trị phần tử của mảng mới sẽ là các phần tử mảng ban đầu nếu
// callback return về truthy
// */
// var newArr = users.filter(function (value, index) {
//   console.log(value, index);
//   return false;
// });
// console.log(newArr);

var customers = [
  ["Customer 1", "customer1@gmail.com", 32],
  ["Customer 2", "customer2@gmail.com", 28],
  ["Customer 3", "customer3@gmail.com", 31],
  ["Customer 4", "customer4@gmail.com", 29],
];

// customers = customers.filter(function (customer) {
//   return !customer.includes("customer2@gmail.com");
// });
// console.log(customers);

// customers = customers.map(function (customer) {
//   if (customer.includes("customer2@gmail.com")) {
//     customer[customer.length - 1] += 2;
//   }
//   return customer;
// });
// console.log(customers);

var data = [];
function addData(value, status) {
  var addItem = function (item) {
    if (!data.includes(item)) {
      data.push(item);
    }
  };
  var removeItem = function (item) {
    data = data.filter(function (_item) {
      return item !== _item;
    });
  };
  if (status) {
    return addItem(value);
  }
  removeItem(value);
}
addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Quân", false);
console.log(data);
