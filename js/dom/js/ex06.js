// Dùng inline css để thêm trực tiếp từ js

var styleBtn1 = document.querySelector(".style-1");
var styleBtn2 = document.querySelector(".style-2");
var styleBtn3 = document.querySelector(".style-3");
var boxEl = document.querySelector(".box");
styleBtn1.addEventListener("click", function () {
  boxEl.style.color = "red";
});
styleBtn2.addEventListener("click", function () {
  //   boxEl.style.fontStyle = "italic";
  //   boxEl.style.fontWeight = '700'
  //   boxEl.style.
  var css = {
    fontStyle: "italic",
    fontWeight: "700",
    backgroundColor: "gray",
    color: null,
  };
  Object.assign(boxEl.style, css);
});
styleBtn3.addEventListener("click", function () {
  //   var css = {
  //     backgroundImage: "url(./img/231-536x354.jpg)",
  //   };
  //   Object.assign(boxEl.style, css);

  boxEl.style.backgroundImage = "url(./img/231-536x354.jpg)";
});
// Bài tập: click vào button Style 3 --> thêm ảnh nền (background - image) với hình ảnh trong folder image
