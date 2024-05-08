// closure: Định nghĩa hàm trong 1 phạm vi khác và có thể sử dụng các thuộc tính bên
//
// trong js tất cả các hàm đều là closure
// var y = 20;
// function display() {
//   console.log("Display");
//   var x = 10;
//   function someThing() {
//     console.log("something");
//     console.log(x);
//     console.log(y);
//   }
//   someThing();
// }
// display();
// var a = 10;
// function getMessage() {
//   console.log("getMessage");
// }
// window.getMessage();
// window.console.log(window.a);

// window.f8 = {
//   showMessage() {
//     console.log("học lập trình không khó");
//   },
// };
// f8.showMessage();
// function display() {
//   return function () {
//     return "học lập trình không khó";
//   };
// }

// // console.log(display()());

// var func = display();
// console.log(func());

/*
if (hama(hamb())){

}
*/
// function sum(a, b) {
//   return function (b) {
//     return a + b;
//   };
// }
// var add = sum(10);
// var result = add(20);
// console.log(result);

// IIFE
// function getMessage() {
//   console.log("học lập trình không khó");
// }
// getMessage();
// (function () {
//   console.log("học lập trình không khó");
// })();

//Giải thuật Đệ quy
// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

function getTotal(n) {
  if (n === 1) {
    return 1;
  }
  return n + getTotal(n - 1);
}
var total = getTotal(10);
console.log(total);

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));
