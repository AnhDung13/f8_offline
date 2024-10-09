// console.dir(document);
// console.dir(document.body);
// console.dir(document.head);
// console.dir(document.title);
// document.title = "hello ae F8";

// Tạo Element Node --> Truy cập vào thẻ html để trả về thẻ object
// var title = document.getElementById("title");
// console.dir(title);

// var titleList = document.getElementsByClassName("title");
// console.log(titleList);

// var titleList = document.getElementsByTagName("h2");
// console.log(titleList);

// var title = document.querySelector("#title");
// console.log(title);

var title = document.querySelectorAll("#title");
console.log(title);
Array.from(title).map(function (value) {
  console.log(value);
});

// DOM HTML
