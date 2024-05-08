// Tự động chuyển về kiểu logic để so sánh (truthy, falsy)
// Falsy: 0, NaN, null, "", undefined, false
// Truthy: Các trường hợp còn lại
// var a = "";
// var b = !a ? "F8" : "Dungz";
// console.log(b);
// Cú pháp truthy: variable
// Cú pháp falsy: !variable

// toán tử && --> Tìm biểu thức sai, còn đúng còn chạy đến khi nào hết thì thôi
var a = 1;
var b = a && "F8";
console.log(b);

// toán tử || --> Tìm biểu thức đúng, còn sai còn chạt đến khi nào hết thì thôi
