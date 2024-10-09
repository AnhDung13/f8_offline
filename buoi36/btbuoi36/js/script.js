let duration = 30;
const countdownTime = document.querySelector(".time");
function countdown() {
  var time = Math.
  duration = time;
  countdownTime.innerHTML = time;
  if (time > 0) {
    requestAnimationFrame(countdown);
  } else {
    cancelAnimationFrame(countdown);
  }
}
requestAnimationFrame(countdown);
