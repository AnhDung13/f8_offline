// var btn = document.querySelector(".btn");
// var input = document.querySelector(".input");

// btn.addEventListener("dblclick", function (e) {
//   //   console.log(this);
//   //   console.log(e.target);
//   console.log(e);
// });

// // input.addEventListener("focus", function (e) {
// //   console.log(e);
// // });

// document.body.addEventListener("keyup", function (e) {});

var btn = document.querySelector("button");
var offsetX = 0;
var offsetY = 0;
btn.addEventListener("mousedown", function (e) {
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  document.addEventListener("mousemove", handleDrag);
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});
var handleDrag = function (e) {
  var top = e.clientY - offsetY;
  var left = e.clientX - offsetX;

  //   if (top < 0) {
  //     top = 0;
  //   }
  //   if (left < 0) {
  //     left = 0;
  //   }
  var css = {
    top: `${top}px`,
    left: `${left}px`,
  };
  Object.assign(btn.style, css);
};
