/*
Event: 
- Hành động từ phía người dùng tác động lên thẻ HTML
- Mặc định trình duyệt có định nghĩa các event tương ứng với các thẻ html 
(Mỗi thẻ html có các event khác nhau)
- Nhiệm vụ của lập trình viên js 
--> lắng nghe event từ phía người dùng để xử lý

*/
/*
Cú pháp lắng nghe sự kiện: 
element.eventname = eventHandler (eventHandler là 1 hàm)

element.addEventListener (eventname, listener) (listener là 1 hàm)
*/
var btn = document.querySelector(".btn");
// btn.onclick = function () {
//   console.log("Clicked");
// };
// btn.onclick = function () {
//   console.log("Học DOM");
// };
// btn.addEventListener("click", function () {
//   console.log("clicked");
// });
// btn.addEventListener("click", function () {
//   console.log("Học DOM");
// });
// var items = document.querySelectorAll(".menu li");
// console.log(items);
// items.forEach(function (item) {
//   item.onclick = function () {
//     console.log(this);
//   };
// });

// var count = 0;
// var handleClick = function () {
//   count++;
//   console.log(count);
//   if (count === 5) {
//     btn.removeEventListener("click", handleClick);
//   }
// };
// btn.addEventListener("click", handleClick);

startBtn = document.querySelector(".start-btn");
var count = 0;
var handleClick = function () {
  count++;
  console.log(count);
  if (count % 5 === 0) {
    startBtn.removeEventListener("click", handleClick);
  }
};
startBtn.addEventListener("click", function () {
  console.log("Đã bắt đầu");
});
