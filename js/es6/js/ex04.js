// Spread

// const arr1 = ["Item 1", "Item 2", "Item 3"];
// const arr2 = ["Item 4", ...arr1, "Item 5", "Item 6"];

// const todos = ["Todo 1", "Todo 2", "Todo 3"];
// // yêu cầu thêm todo 4 vào mảng todos và lưu vào biến mới

// const newTodo = [...todos, "Todo 4"];
// console.log(newTodo);

// const form = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// // cập nhật lại email và lưu object vào biến mới
// const newForm = { ...form, email: "contact@fullstack.edu.vn" };
// console.log(newForm);

// const something = (args1, args2, args3) => {
//   console.log(args1);
//   console.log(args2);
//   console.log(args3);
// };

// const data = ["Data 1", "Data 2", "Data 3", "Data 4"];
// something(...data);

// Enhanced Object Literal
// const name = "Hoàng An";
// const email = "hoangan.web@gmail.com";
// const user = {
//   name,
//   email,
// };
// console.log(user);

// const something = (name, email, address) => {
//   console.log(`Name: ${name}`);
//   console.log(`Email: ${email}`);
//   console.log(`Address: ${address}`);
// };
// // trường hợp 1 chỉ muốn truyền name
// // something("Hoàng An");

// // trường hợp 2 chỉ muốn truyền email
// something(undefined, "hoangan.web@gmail.com");

// xây dựng hàm hỗ trợ named argument (áp dụng destructuring và enhanced)

const something = ({ name, email, address }) => {
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Address: ${address}`);
};
// something({ email: "hoangan" });
const address = "Hanoi";
something({ address });
