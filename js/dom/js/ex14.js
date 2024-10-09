// var input = document.querySelector("input");

const beforeUnloadHandler = (event) => {
  // Recommended
  event.preventDefault();
  // Included for legacy support, e.g. Chrome/Edge < 119
  event.returnValue = true;
};
// input.addEventListener("input", function (e) {
//   var defaultValue = e.target.defaultValue;
//   var value = e.target.value;
//   console.log(defaultValue, value);
//   if (defaultValue !== value) {
//     window.addEventListener("beforeunload", beforeUnloadHandler);
//   } else {
//     window.removeEventListener("beforeunload", beforeUnloadHandler);
//   }
// });

var form = document.querySelector("form");
form.addEventListener("input", function (e) {
  var defaultValue = e.target.defaultValue;
  var value = e.target.value;
  console.log(defaultValue, value);
  if (defaultValue !== value) {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
