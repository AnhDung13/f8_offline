// alert("Học js không khó")
// confirm("Học js không khó")
// console.log("OK")

// setTimeout(() => {
//   console.log("start");
// }, 0);

// console.log("js");

//ES6 --> Promise
//Callback --> Callback Hell
//Promise --> Vẫn tồn tại callback nhưng sẽ viết dưới dạng Chaining
//object.method1().method2().method3();

//Các trạng thái của Promist
// - pending
// - fulfilled
// - rejected

//Để làm việc với promise có 2 bước
// - 1. Khởi tạo object promise và đưa dữ liệu vào Promise
// - 2. Gọi Promise và trả về kết quả

// const getA = (callback) => {
//   setTimeout(() => {
//     const user = {
//       name: "Hoàng An",
//       age: 32,
//     };
//     callback(user);
//   }, 3000);
// };
// const getB = (callback) => {
//   setTimeout(() => {
//     const course = {
//       name: "fullstack",
//       age: 32,
//     };
//     callback(course);
//   }, 1000);
// };
// getB((data) => {
//   console.log(data);
//   getA((data) => {
//     console.log(data);
//   });
// });

// const getA = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = {
//         name: "Hoàng An",
//         age: 32,
//       };
//       //nếu dữ liệu trả về thành công --> gọi hàm resolve để trả về
//       //nếu thất bại --> gọi hàm reject để trả về lỗi
//       resolve(user);
//       reject("lỗi");
//     }, 3000);
//   });
// };

// const getB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const course = {
//         name: "fullstack",
//         age: 32,
//       };
//       resolve(course);
//     }, 1000);
//   });
// };

// return của then trên là kq của then dưới

// getA()
//   .then((data) => {
//     console.log(data);
//     return getB();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const getUser = (userId) => {
//   const users = [
//     {
//       id: 1,
//       name: "User 1",
//       salary: 1000,
//     },
//     {
//       id: 2,
//       name: "User 2",
//       salary: 2000,
//     },
//     {
//       id: 3,
//       name: "User 3",
//       salary: 3000,
//     },
//     {
//       id: 4,
//       name: "User 4",
//       salary: 4000,
//     },
//   ];
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const user = users.find(({ id }) => userId === id);
//       resolve(user);
//     }, 1000);
//   });
// };

// const ids = [1, 3, 4];

// const getTotal = () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const id = ids[i];
//     const promise = getUser(id).then((data) => {
//       const salary = data.salary;
//       total += salary;
//       if (i === ids.length - 1) {
//         return total;
//       }
//     });
//     if (i === ids.length - 1) {
//       return promise;
//     }
//   }
// };
// getTotal().then((data) => {
//   console.log(data);
// });

// promise.all() --> thực thi nhiều promise cùng 1 lúc và trả về 1 mảng mới chứa dữ liệu đã được resolve

// const promiseArr = ids.map((id) => getUser(id));
// Promise.all(promiseArr).then((users) => {
//   const total = users.reduce((total, user) => total + user.salary, 0);
//   console.log(total);
// });

// // try catch
// try {
//   //   something();
//   let a;
//   if (!a) {
//     throw new Error("Biến a phải có dữ liệu");
//   }
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log("Đã xong");
// }
// console.log("f8");

// Async Function
// Resolve Promise không cần dùng then (không có callback)
// Cách viết như đồng bộ (Tuần tự)

// Lưu ý: Hàm async luôn trả về 1 promise

//hàm async luôn trả về 1 promise
// const something = async () => {
//   return "F8";
// };
// console.log(something());

const getA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        name: "Hoàng An",
        age: 32,
      };
      //nếu dữ liệu trả về thành công --> gọi hàm resolve để trả về
      //nếu thất bại --> gọi hàm reject để trả về lỗi
      resolve(user);
      reject("lỗi");
    }, 3000);
  });
};

// const handleGetA = async () => {
//   const user = await getA();
//   console.log(user);
// };
// handleGetA();

(async () => {
  try {
    const user = await getA();
    console.log(user);
  } catch (e) {
    console.log(e);
  }
})();

// tìm hiểu thư viện json-server
// Ôn lại http request, http response
// tìm hiểu hàm fetch()
