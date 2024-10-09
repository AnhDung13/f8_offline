// Làm việc với thuộc tính
// element.attributeName
// element.attributeName = value
var a = document.querySelector("a");
console.log(a);
// console.log(a.href);
// console.log(a.target);
// console.log(a.title);
// console.log(a.id);
// console.log(a.className);
// a.href = "https://f8.edu.vn";
// a.className = "nav-link";
// a.target = "_self";

// getAttribute(attributeName)
// setAttribute(attributeName, value)

// Data Attribute (Thuộc tính custom được sử dụng để xử lý js)
// Cú pháp: data-*

// Dataset: Object có sẵn trong Element Node giúp thao tác với Data Attribute dưới dạng object

var width = a.dataset.width;
console.log(width);
a.dataset.height = 200;

delete a.dataset.width;

// thêm thuộc tính data-animation-duration = 2 (sử dụng data set)

a.dataset.animationDuration = 2;
a.dataset.animationTimingFunction = "ease";

// xóa thuộc tính có thể xóa mọi thuộc tính
a.removeAttribute("id");
a.removeAttribute("class");

// xóa thẻ html
a.remove();

//ClassList
var contentEl = document.querySelector(".content");
console.log(contentEl.classList);
contentEl.classList.add("content-1", "content-2", "content-3");
contentEl.classList.remove("content-2");
contentEl.classList.replace("content-1", "content-11");
console.log(contentEl.classList.contains("content-3"));
contentEl.classList.toggle("item");
contentEl.classList.toggle("item");
