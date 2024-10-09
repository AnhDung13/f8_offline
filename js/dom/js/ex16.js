//các bước định nghĩa sự kiện
/*
Bước 1: Xác định tên sự kiện
Bước 2: Xác định element có sự kiện đó
Bước 3: Xác định thời điểm gửi sự kiện (dispatch), có kèm theo dữ liệu không?
Bước 4: Lắng nghe sự kiện
*/
// var finishEvent = new Event("finish");
// var input = document.querySelector("input");
// input.addEventListener("input", function (e) {
//   var value = e.target.value;
//   if (+value === 100) {
//     this.dispatchEvent(finishEvent);
//   }
// });

// input.addEventListener("finish", function () {
//   console.log("đã xong");
// });

// var input2 = document.querySelector(".input-2");
// input2.addEventListener("finish", function (e) {
//   console.log("inp2 finish");
//   console.log(e.initialRate);
// });
HTMLElement.prototype.change = function () {
  var changeEvent = new Event("change");
  input.dispatchEvent(changeEvent);
};
var quantity = document.querySelector(".quantity");
var minus = quantity.querySelector(".minus");
var plus = quantity.querySelector(".plus");
var input = quantity.querySelector("input");

plus.addEventListener("click", function () {
  input.value++;
  input.change();
});

minus.addEventListener("click", function () {
  input.value--;
  if (input.value < 1) {
    input.value = 1;
  }
  input.change();
});
input.addEventListener("change", function () {
  var value = this.value;
  console.log(value);
});

//trigger event

/*
1. Dùng các hàm có sẵn:
- click()
- focus()
- submit()

2. Dùng dispatchEvent
*/
input.focus();
// setInterval(function () {
//   plus.click();
// }, 1);
