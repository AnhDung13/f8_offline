// var number = [1, 2, 5, 7, 9];
// some(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về true, fales
- Trả về true khi có ít nhất 1 lần trả về truthy trong callback
*/
// var result = number.some(function (value, index) {
//   return value % 2 === 0;
// });
// // console.log(result);

// // every(callback) --> Ngược lại với some (tất cả đều đúng)

// var number = [1, 3, 2, 5, 9];
// var result = number.every(function (value) {
//   return value % 2 !== 0;
// });
// console.log(result);

// find(callback)
/*
- Điều kiện giống filter
- Trả về phần tử đầu tiên tìm được
*/
// var number = [1, 3, 2, 5, 9];
// var result1 = number.filter(function (number) {
//   return number > 2;
// });
// console.log(result1);
// var number = [1, 3, 2, 5, 9];
// var result2 = number.find(function (number) {
//   return number > 2;
// });
// console.log(result2);

// findLast(callback) --> Tìm phần tử cuối cùng

// findIndex(callback) --> Tìm index đầu tiên

// findLastIndex(callback) --> tìm index cuối cùng

// var users = [
//   ["A", "A"],
//   ["B", "B"],
//   ["C", "C"],
//   ["D", "D"],
// ];
// var arr = ["B", "B"];
// var index = users.findIndex(function (user) {
//   return user.join() === arr.join();
// });
// console.log(index);

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var result = [];

arrA.forEach(function (item) {
  if (arrB.includes(item)) {
    result.push(item);
  }
});
console.log(result);

// Tìm hiểu reduce
