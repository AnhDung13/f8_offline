var openBtn = document.querySelector(".open-btn");
var closeBtn = document.querySelector(".close-btn");
var overlay = document.querySelector(".overlay");
var model = document.querySelector(".modal-header");
openBtn.addEventListener("click", function () {
  model.classList.add("show");
  overlay.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  model.classList.remove("show");
  overlay.classList.remove("show");
});
overlay.addEventListener("click", function () {
  model.classList.remove("show");
  overlay.classList.remove("show");
});
