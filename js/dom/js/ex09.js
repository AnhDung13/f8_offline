// DOM Navigation
/*
Chọn các elemnet theo phân cấp cha,con, ngang hàng (trước, sau)
- parentElement
- children
- nextElementSibling
- previousElementSibling
*/

// var menuLinkList = document.querySelectorAll("a");
// menuLinkList.forEach(function (menuLink) {
//   menuLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     // console.log(this);
//     // this.parentElement.classList.add("active");
//     // console.log(this.nextElementSibling);
//     var children = this.nextElementSibling.children;
//     for (var i = 0; i < children.length; i++) {
//       children[i].classList.add("children");
//     }
//   });
// });

var menuLinks = document.querySelectorAll("a");
menuLinks.forEach(function (menuLink) {
  var subMenu = menuLink.nextElementSibling;
  if (subMenu) {
    menuLink.parentElement.classList.add("has-children");
  }
  menuLink.addEventListener("click", function () {
    // lấy menu active của lần mở trước
    var menuItemActive = document.querySelector(".menu li.active");
    // thêm active của lần mở hiện tại
    menuLink.parentElement.classList.toggle("active");
    // xóa menu active của lần trước
    if (menuItemActive) {
      menuItemActive.classList.remove("active");
    }
  });
});
