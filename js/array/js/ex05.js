// reduce(callback, initialValue)
/*
callback có 4 tham số
- prevValue
- currentValue
- index
- array --> mảng ban đầu

initialValue: Giá trị khởi tạo

Cách hoạt động

1. Không có intialValue
- Vòng lặp sẽ chạy từ phần tử thứ 2 cho đến hết
- prevValue của lần lặp đầu tiên chính là phần tử đầu tiên của mảng
- currentValue là các phần tử của mảng qua mỗi lần lặp
- prevValue của lần lặp sau sẽ là return của lần lặp trước
- giá trị của vòng lặp reduce sẽ là lần return cuối cùng


2. Có initialValue
- Vòng lặp sẽ chạy tử đầu
- prevValue của lần lặp đầu tiên chính là initialValue
- currentValue là các phần tử của mảng qua mỗi lần lặp
- prevValue của lần lặp sau sẽ là return của lần lặp trước
- giá trị của vòng lặp reduce sẽ là lần return cuối cùng
*/

// var numbers = [5, 10, 15, 20, 25, 30];

// // var result = numbers.reduce(function (prev, current, index) {
// //   console.log(`prev = ${prev}`, `current = ${current}`, `index = ${index}`);
// //   return current;
// // }, 0);

// // console.log(result);

// var total = numbers.reduce(function (prev, current) {
//   return prev + current;
// });
// console.log(total);

var numbers = [2, 9, 5, 1, -5];
// tìm phần tử lớn nhất dùng reduce

var result = numbers.reduce(function (prev, current) {
  if (prev < current) {
    return current;
  }
  return prev;
});
console.log(result);

var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];

var result = users.reduce(function (prev, current) {
  if (!prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(result);

var arr1 = [5, 2, 1, 6, 9];
var arr2 = [2, 1, 6];

var result = arr1.reduce(function (prev, current) {
  if (!arr2.includes(current) && !prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(result);

var numbers = [1, [2, 3], 4, [[5, 6]], 7, [[[8, 9]]]];
function flatArr(arr) {
  return arr.reduce(function (prev, current) {
    // return prev.concat(Array.isArray(current) ? flatArr(current) : current);
    if (Array.isArray(current)) {
      return prev.concat(flatArr(current));
    }
    return prev.concat(current);
  }, []);
}
console.log(flatArr(numbers));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var size = 2;
// Chunk array với size tương ứng
// output : [[1,2],[3,4],[5,6],[7,8],[9]]

var result = numbers.reduce(function (prev, _, index) {
  if (index % size === 0) {
    prev.push(numbers.slice(index, index + size).join(""));
  }
  return prev;
}, []);

console.log(result);

var chunkArr = numbers.reduce(
  function (prev, current) {
    if (prev[prev.length - 1].length < size) {
      prev[prev.length - 1].push(current);
    } else {
      prev.push([current]);
    }
    return prev;
  },
  [[]]
);
console.log(chunkArr);
// Array.from()
// Array.keys()
// tham chiếu Array
// Copy Array
