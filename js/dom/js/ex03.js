// Các thao tác của DOM HTML
/*
- Lấy nội dung của thẻ html
- Thay đổi nội dung thẻ html
- Xóa thẻ html
- Thêm, sửa, xóa thuộc tính trong thẻ html
*/
var contentEl = document.querySelector(".content");
//1. innerHTML
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<h2>Học js không khó</h2>`;

//2. innerText
// console.log(contentEl.innerText);
// contentEl.innerText = `<h2>Học js không khó</h2>`;

//3. textContent
// console.log(contentEl.textContent);
// contentEl.textContent = `<h2>Học js không khó</h2>`;

//4. outerHTML
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h2>Học js không khó</h2>`;

//5. outerText
// console.log(contentEl.outerText);
// contentEl.outerText = `<h2>Học js không khó</h2>`;

var btn = document.querySelector(".btn");
// Bài làm
// var count = 0;
// var handleClick = function () {
//   count++;
//   if (count % 2 !== 0) {
//     contentEl.innerHTML = "";
//     btn.innerHTML = "hiện";
//   } else {
//     contentEl.innerHTML = `<h2>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus
//     quidem ad
//   </h2>
//   beatae exercitationem suscipit expedita aperiam impedit et odio aut sunt
//   natus error architecto magni alias pariatur reiciendis. Sed!`;
//     btn.innerHTML = "ẩn";
//   }
// };
// btn.addEventListener("click", handleClick);

// Bài chữa
var content = contentEl.innerHTML;
btn.addEventListener("click", function () {
  if (!contentEl.innerHTML) {
    contentEl.innerHTML = content;
    this.innerHTML = "ẩn";
  } else {
    contentEl.innerHTML = "";
    this.innerHTML = "hiện";
  }
});
var count = document.querySelector(".count");
var btnMinus = document.querySelector(".btn-minus");
var btnAdd = document.querySelector(".btn-add");

// var count = 0;
// counter.innerHTML = `Count: ${count}`;
// btnMinus.onclick = function () {
//   count--;
//   counter.innerHTML = `Count: ${count}`;
// };
// btnAdd.onclick = function () {
//   count++;
//   counter.innerHTML = `Count: ${count}`;
// };
btnMinus.addEventListener("click", function () {
  count.innerText--;
});
btnAdd.addEventListener("click", function () {
  count.innerText++;
});
