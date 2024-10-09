//load(window) --> Khi các tài nguyên trên trang web tải xong (html, css, js, media,)

//DOMContentLoaded --> khi hình thành cây DOM (html tải xong)
var getSizeImage = function () {
  var imgEl = document.querySelector("img");
  var width = imgEl.width;
  var height = imgEl.height;
  console.log(width, height);
};

//event fire
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM");
});
window.addEventListener("load", function () {
  //   var h1 = document.querySelector("h1");
  //   console.log(h1);
  //   console.log("Load");
  //   getSizeImage();
  var loading = document.querySelector(".loading");
  var css = {
    opacity: "0",
    visibility: "hidden",
    transition: "1s ease",
  };
  Object.assign(loading.style, css);
  //nếu k dùng visibility
  //   setTimeout(function () {
  //     loading.style.display = "none";
  //   }, 1000);
});
