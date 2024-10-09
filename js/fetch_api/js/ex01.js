//các cách gọi api từ js
//1. fetch()
//2. XMLHttpRequest()
//3. thư viện: jquery ajax, axios, node fetch,...
const userApiUrl = `http://localhost:3000/user`;

// fetch(userApiUrl)
//   .then((response) => {
//     //response.text() và response.json() --> Promise có chứa response body từ server
//     // return response.text();
//     if (!response.ok) {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     // data = JSON.parse(data);
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getUsers = async () => {
//   const response = await fetch(userApiUrl);
//   const data = await response.json();
//   console.log(data);
// };
// getUsers();

// const addUser = async (data) => {
//   const response = await fetch(userApiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       //"Content-Type": "application/x-www-form-urlencode"
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response);
// };
// addUser({
//   name: "User 4",
//   email: "user4@gmail.com",
//   status: "inactive",
// });

// const updateUser = async (id, data) => {
//   const response = await fetch(userApiUrl + "/" + id, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       //"Content-Type": "application/x-www-form-urlencode"
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response);
// };
// updateUser(1, {
//   name: "User 1",
// });

const deleteUser = async (id) => {
  const response = await fetch(userApiUrl + "/" + id, {
    method: "DELETE",
  });
};
deleteUser(1);
