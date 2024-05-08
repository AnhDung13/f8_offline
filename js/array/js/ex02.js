// console.log(Array.prototype);

var user = ["User1", "User2", "User3", "User4", "User2"];

// 1. at(index) --> lấy phần tử theo index
// console.log(user.at(0));

// 2. concat(arr1, arr2, arr3, ...) -->nối mảng
// console.log(user.concat([1, 2, 3], [4, 5, 6]));

// 3. fill(value) --> thay thế tất cả các phần tử trong mảng thành 1 giá trị
// user.fill(0);
// console.log(user);

// 4. indexOf(value) --> tìm phần tử trong mảng và trả về index đầu tiên
// console.log(user.indexOf("User3"));

// 5. lastIndexOf(value) --> tìm phần tử trong mảng và trả về index cuối cùng
// console.log(user.lastIndexOf("User2"));

// 6. include(value) --> tìm phần tử trong mảng và trả về true, false
// console.log(user.includes("User3"));

// 7. slice(start, end) --> cắt mảng từ index đến end - 1
// console.log(user.slice(0, 2));
// console.log(user.slice(1));
// console.log(user.slice(-2));

// 8. push(value1, value2, value3) --> thêm phần tử vào cuối mảng và thay đổi mảng
// ban đầu. Giá trị của hàm push là tổng số lượng phần tử của cả mảng sau khi thêm

// var count = user.push(1, 2, 3, "A", "B", "C");
// console.log(count);
// console.log(user);

// 9. unshift(value1, value2, value3) --> thêm phần tử vào đầu mảng và thay đổi mảng
// ban đầu. Giá trị của hàm unshift là tổng số lượng phần tử của cả mảng sau khi thêm
// var count = user.unshift(1, 2, 3, "A", "B", "C");
// console.log(count);
// console.log(user);

// 10. pop() --> Xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa
// thay đổi mảng ban đầu
// var value = user.pop();
// console.log(value);
// console.log(user);

// 11. shift() --> Xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa
// thay đổi mảng ban đầu
// var value = user.shift();
// console.log(value);
// console.log(user);

// 12. reverse() --> đảo ngược mảng, trả về mảng mới và thay đổi mảng ban đầu
// var newArr = user.reverse();
// console.log(newArr);
// console.log(user);

// 13. join() -->  Nối các phần tử mảng thành chuỗi
// console.log(user.join(" "));
// var fullname = "Công Anh Dũng";
// var fisrtName = fullname.split(" ").slice(-1).join();
// console.log(fisrtName);
