// console.dir(Object);

// var user = {
//   name: "Hoàng An",
//   email: "ha.web@gm.com",
// };
// console.log(user);
// var user2 = Object.create(null);
// user2.name = "Hoang An";
// user2.email = "ha.web@gm.com";
// console.log(user2);

// Object.create còn có tác dụng kế thừa prototype

// Tham chiếu

// var a = {
//   name: "Hoang An",
//   email: "ha.web@gmail.com",
// };
// // var b = a;
// // Shallow copy
// // var b = Object.assign({}, a); chỉ được 1 cấp
// // Deep copy
// var b = JSON.parse(JSON.stringify(a));
// var b = { ...a };
// b.name = "Hoàng An F8";
// console.log(a);
// console.log(b);

var users = [
  {
    name: "User 1",
    email: "user1@gmail.com",
  },
  {
    name: "User 2",
    email: "user2@gmail.com",
  },
  {
    name: "User 3",
    email: "user3@gmail.com",
  },
  {
    name: "User 4",
    email: "user4@gmail.com",
  },
];
var email = "user2@gmail.com";
var user = users.find(function (user) {
  return user.email === email;
});
user.name = "Anh Dũng";

var content = users
  .map(function (user, index) {
    // if (user.email.includes("user2@gmail.com")) {
    //   user.name = "Anh Dũng";
    // }
    return `<tr>
              <td>${index + 2}</td>
              <td>${user.name}</td>
              <td>${user.email}</td> 
            </tr>`;
  })
  .join("");
document.write(`<table width="100%" border="1">
<thead>
  <tr>
    <th width="5%">STT</th>
    <th>Tên</th>
    <th>Email</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Hoàng An</td>
    <td>hoangan.web@gmail.com</td>
  </tr>
    ${content}
</tbody>
</table>`);

/*
1. String
2. Number
3. BigInt
4. Boolean
5. Symbol
6. Undefined
7. null 
--> kiểu dữ liệu nguyên thủy
8. Object : kiểu dữ liệu tham chiếu --> không thể so sánh trực tiếp
*/
