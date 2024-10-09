// var lastPosition = 0;
// window.addEventListener("scroll", function () {
//   var position = window.scrollY; //lấy tọa độ so với top theo trục Y
//   console.log(position, lastPosition);
//   if (position > lastPosition) {
//     document.body.style.background = "red";
//   } else {
//     document.body.style.background = "white";
//   }
//   lastPosition = position;
// });

//window.scroll(opt)

// var btn = document.querySelector(".btn");
// var backtoTop = document.querySelector(".back-to-top");
// btn.addEventListener("click", function () {
//   window.scroll({
//     top: 500,
//     behavior: "smooth",
//   });
// });
// backtoTop.addEventListener("click", function () {
//   window.scroll({
//     top: 0,
//     behavior: "smooth",
//   });
// });
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
//     if (window.scrollY >= 100) {
//       backtoTop.style.display = "block";
//     } else {
//       backtoTop.style.display = "none";
//     }
// });

// var sections = document.querySelectorAll(".section");
// var innerBtn = document.querySelector(".inner-btn");
// for (var i = 0; i < sections.length; i++) {
//   var btn = document.createElement("button");
//   btn.className = "btn";
//   btn.id = i + 1;
//   btn.innerText = `Section ${i + 1}`;
//   sections[i].id = i + 1;
//   innerBtn.append(btn);
// }

// var btns = document.querySelectorAll(".btn");
// btns[0].classList.add("active");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     btn.classList.add("active");
//     sections.forEach(function (section, index) {
//       if (btn.id === section.id) {
//         window.scroll({
//           top: section.clientHeight * index,
//           behavior: "smooth",
//         });
//       }
//     });
//   });
// });

var btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  var sectionID = e.target.dataset.target;
  var section = document.querySelector(sectionID);
  window.scroll({
    top: section.offsetTop,
  });
});
