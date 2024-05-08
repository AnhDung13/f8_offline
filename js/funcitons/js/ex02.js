// setInterval --> lặp đi lặp lại 1 đoạn chương trình với 1 khoảng thời gian nhất định
// ví dụ: 1s chạy lại 1 lần

// var count = 0;
// var id = setInterval(function () {
//   console.log("Hello", count++);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

// định nghĩa 1 hàm callback có đối số

// function display(callback) {
//   console.log("Display");
//   typeof callback === "function" && callback();
// }

// var showLog = function (a) {
//   console.log("hello anh em", a);
// };

// display(function () {
//   showLog("F8");
// });

function step1(callback) {
  setTimeout(function () {
    console.log("bước 1");
    typeof callback === "function" && callback();
  }, 1000);
}
function step2(callback) {
  setTimeout(function () {
    console.log("bước 2");
    typeof callback === "function" && callback();
  }, 500);
}
function step3(callback) {
  setTimeout(function () {
    console.log("bước 3");
    typeof callback === "function" && callback();
  }, 1500);
}

step1(function () {
  step2(function () {
    step3();
  });
});

/*
1. Định nghĩa hàm con
2. Closure
3. Kỹ thuật Thunk Function
4. IIFE
5. Giải thuật đệ quy
*/
