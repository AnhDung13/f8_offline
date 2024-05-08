/*
- hàm là cú pháp trong lập trình giúp tách các đoạn chương trình con 
- thể hiện là 1 chức (động từ
    Đặt tên thoe quy tắc maelcase và sử dhung
    ví dụ sum, getTotal,message, 

    cú pháp 
     - định nghiua hàng
     funtion tenham (){
        Nội dung hàn
     }

     
     funtion tenham(thamso1, thamso2){
        nội dung hàm

     }
     --> tham sô: parameter
     -gọi hàm
     tenham()
     tenham(dodoiso1, doiso2)
     --> đối só arguments

)
Hàm có từ khóa return --> được gọi là hàm có giá trị trả về khi từ khóa  return được gọi các đoạn code trả về bên dưới return sẽ không hoạt động


biến toàn cục: Sử dụng ở phạm vi ngoài hàm
, biến cục bộ: sử dụng ở phạm vi trong hàm

trên thực tế: trong 1 hàm có thể gọi 1 hàm khác

hàm ẩn danh (Hàm không tên, anonymous function)

function(){
   Nội dung hàm 
}
Lưu ý: hàm ẩn danh sẽ không gọi và định nghĩa được (trừ khi gán vào 1 biến hoặc 1 hàm khác)
*/
// function showwMessage(msg, type = "success") {
//   console.log("hocjs kgoo == khó");
//   console.log(msg);
//   console.log(type);
//   return 1;
//   console.log("helloo");
// }

// function divition(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return "không tính được";
// }

// console.log(divition(10, 2));
// console.log(divition(10, 0));

// var a = 0;
// function getNumber() {
//   return a;
// }

// function setNumber(value) {
//   a = value;
// }

// setNumber(10);
// console.log(getNumber());
// function sum(a, b) {
//   return a + b;
// }
// function showResult() {
//   var total = sum(10, 20);
//   console.log(total);
// }

// showResult();

// declaration function
// function showNumber(){
//    console.log();
// }

// // expresstion function

// var showwMessage = function () {
//   console.log("học lập trình không khó");
// };
// showwMessage();

// function display(a) {
//   console.log("Display");
//   a();
// }

// display(function () {
//   console.log("hello");
// });

// setTimeout() --> Delay quá trình thực thi lệnh

/*
setTimeout(callback, time, args)
*/

// setTimeout(
//   function (a, b, c) {
//     console.log("Hello anh em", a, b, c);
//   },
//   5000,
//   "a",
//   "b",
//   "c"
// );

function max(a, b, ...rest) {
  console.log(a, b);
  console.log(rest);
}
max(5, 10, 15, 20, 25, 30);
