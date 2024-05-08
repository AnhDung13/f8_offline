// khai báo mảng
// var myArray = [1, 5, 3, "hello", true, false, null, undefined];

// // kiểm tra số lượng phần tử
// // console.log(myArray.length);
// // kiểm tra 1 biến có phải là mảng không

// if (Array.isArray(myArray)) {
//   console.log("đây là mảng");
// } else {
//   console.log("đây không phải mảng");
// }

// // thêm phần tử mới
// // cú pháp: tenbienmang[indexmoi] = giatri

// myArray[myArray.length] = "An";
// myArray[myArray.length] = "Nam";

// // sửa phần tử --> xác định được index
// myArray[3] = "Hello F88";

// duyệt mảng(đọc mảng)
// console.log(myArray[0]);
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }
// for (var index in myArray) {
//   console.log(index, myArray[index]);
// }

// for (var value of myArray) {
//   console.log(value);
// }

// Xóa phần tử trong mảng --> xác định inđex

// var deleteIndex = 3;
// var newArray = [];
// for (var index in myArray) {
//   if (+index === +deleteIndex) {
//     continue;
//   }
//   newArray[newArray.length] = myArray[index];
// }
// myArray = newArray;

// bài tập: thêm 1 phần tử bất kỳ vào đầu mảng
// var newValue = "JS";

// var newArray = [newValue];
// for (var value of myArray) {
//   newArray[newArray.length] = value;
// }
// myArray = newArray;
// console.log(myArray);

// var user = [
//   "Tạ Hoàng An",
//   "Nguyễn Tuấn Anh",
//   "Nguyễn Văn Dũng",
//   "Phạm Văn Hiếu",
// ];
// var keyword = "an";
// // yêu cầu xóa tất cả phần tử có chứa keyword (không phân biệt hoa thường)
// var newUser = [];

// for (var index in user) {
//   if (user[index].toLowerCase().includes(keyword.toLowerCase())) {
//     continue;
//   }
//   newUser[newUser.length] = user[index];
// }
// user = newUser;
// console.log(user);

// var numbers = [5, 2, 1, 9, 6];
// // yêu cầu: tìm phần tử lớn nhất và đổi chỗ với phần tử đầu tiên

// var max = numbers[0];
// var maxIndex;
// // bài chữa
// for (var index in numbers) {
//   if (max < numbers[index]) {
//     max = numbers[index];
//     maxIndex = index;
//   }
// }

// // bài làm
// // for (var value of numbers) {
// //   if (max < value) {
// //     max = value;
// //   }
// // }

// // var maxIndex;
// // for (var index in numbers) {
// //   if (numbers[index] === max) {
// //     maxIndex = index;
// //   }
// // }
// numbers[maxIndex] = numbers[0];
// numbers[0] = max;

// console.log(numbers);

// var fullname = "tạ hoàng an";

// var nameArr = fullname.split(" ");
// var newName = "";
// for (var value of nameArr) {
//   value = value
//     .toLowerCase()
//     .replace(value.slice(0, 1), value.slice(0, 1).toUpperCase());
//   newName += value + " ";
// }

// console.log(newName);
