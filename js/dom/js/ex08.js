// event objec

// 1. preventDefault()
// => Ngăn các hành động mặc định của trình duyệt với các thẻ html

// 2. stopPropagation()
// ngăn chặn nổi bọt
// var link = document.querySelector(".link");
// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(this.href);
// });
var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  var x = e.clientX;
  var y = e.clientY;
  var css = {
    top: y + "px",
    left: x + "px",
    display: "block",
  };
  Object.assign(menu.style, css);
});

document.addEventListener("click", function () {
  menu.style.display = "none";
});

menu.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target.nodeName === "LI") {
    e.target.style.color = "yellow";
  }
});
