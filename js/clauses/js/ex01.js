/* 
Câu lệnh rẽ nhánh: Thực thi đoạn trương trình theo điều kiện nhất định
Điều kiện: Dùng biểu thức logic (Boolean)

Trong lập trình có 2 câu lệnh rẽ nhánh
1. if else
1.1 Câu lệnh if thiếu


if (conditions){
    code
}


1.2 Câu lệnh if đủ


if (conditions){
    code đúng
}else {
    code sai
}


1.3 Câu lệnh if nhiều nhánh


if (conditions1){
    code case 1
}else if (conditions 2){
    code case 2
}else if (condition n){
    code case n
}else{
    code case n+1
}


1.4 Câu lệnh if lồng


if (conditions 1){
    if (conditions 2){
        code true conditions 2
    }else{
        code false conditions 2
    }
}else{
    code false conditions 1
}

Tính lương thực nhận của nhân viên sau khi trừ thuế 
Quy ước 
- lương <= 5tr --> thuế 0%
- lương >5tr và < 15tr --> thuế 3%
- >= 15tr --> thuế 5%



2. switch case
*/

// var salary = 7000000;
// if (salary <= 5000000) {
//   income = salary;
//   console.log(income);
// } else if (salary > 5000000 && salary < 15000000) {
//   income = salary - (salary * 3) / 100;
//   console.log(income);
// } else {
//   income = salary - (salary * 5) / 100;
//   console.log(income);
// }
// var salary = 7000000;
// var income, tax;
// if (salary < 5000000) {
//   tax = 0;
// } else if (salary >= 15000000) {
//   tax = 5;
// } else {
//   tax = 3;
// }
// income = salary - (salary * tax) / 100;
// console.log(income);

// var saleRate = 5;
// var salePrice = 1000000;

// var price = salePrice + (salePrice * saleRate) / 100;
// console.log(price);
var seconds = 350;

var minute = Math.floor(seconds / 60);
seconds -= minute * 60;
console.log(minute + " phút " + seconds + " giây");
