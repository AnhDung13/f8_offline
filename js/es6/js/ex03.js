// Destructuring (Array, Object)
// Phá vỡ cấu trúc array, object để truy cập vào các key và lưu vào các biến riêng biệt
// const user = {
//   username: "hoangan",
//   email: "hoangan.web@gmail.com",
//   password: "123456",
// };

// const { username, email: userEmail, age = 30 } = user;
// console.log(username, userEmail, age);

// const { username, email, ...rest } = user;
// console.log(rest);

// const users = ["Hoàng An", "adu@gm.com", 32, "hanoi"];

// const output = {
//   displayName: `Hoàng An F8`,
//   emails: [
//     {
//       email: "hoangan.web@gm.com",
//     },
//   ],
// };

// const {
//   displayName,
//   emails: [{ email }],
// } = output;
// console.log(displayName, email);

const users = [
  {
    id: 1,
    name: "User 1",
  },
  {
    id: 2,
    name: "User 2",
  },
  {
    id: 3,
    name: "User 3",
  },
];

users.forEach(({ name }) => {
  console.log(name);
});
