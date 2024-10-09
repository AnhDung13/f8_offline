// Thời gian dựa theo máy tính của client (Áp dụng với FrontEnd)

// const today = new Date();// lấy thời gian hiện tại
// console.log(today);
// const date = new Date();
// console.log(date);
// Các phương thức trong nhóm get
// console.log(date.getDay()); // lấy thứ (tính từ 0 = chủ nhật)
// console.log(date.getMonth()); // lấy tháng bắt đầu từ 0
// console.log(date.getFullYear());
// console.log(date.getYear());
// console.log(date.getHours());
// console.log(date.getSeconds())
// console.log(date.getMilliseconds());
// console.log(date.getTime());

// Các phương thức trong nhóm set
// date.setDate(29);
// console.log(date);

const targetDate = new Date(`2024/07/31 09:30:30`).getTime();
const dayEL = document.querySelector(".day");
const hoursEL = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const handleCountDown = () => {
  const curentDate = new Date().getTime();
  const timeLeft = (targetDate - curentDate) / 1000;
  const day = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft - day * 86400) / 3600);
  const minutes = Math.floor((timeLeft - (day * 86400 + hours * 3600)) / 60);
  const seconds = Math.floor(
    timeLeft - (day * 86400 + hours * 3600 + minutes * 60)
  );
  dayEL.innerText = day < 10 ? "0" + day : day;
  hoursEL.innerText = hours < 10 ? "0" + hours : hours;
  minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
};
handleCountDown();
setInterval(handleCountDown, 1000);
