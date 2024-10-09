var inputList = document.querySelectorAll('input[type="range"]');

var finishEvent = new Event("finish");
inputList.forEach(function (input) {
  input.addEventListener("mousedown", function (e) {
    var initialRate = (e.offsetX * 100) / this.clientWidth;
    initialRate = Math.round(initialRate);
    finishEvent.initialRate = initialRate;
  });
  input.addEventListener("input", function (e) {
    var value = e.target.value;
    if (+value === 100) {
      this.dispatchEvent(finishEvent);
    }
  });
});

//Đăng ký tài khoản

/*
- Gửi email kích hoạt
- Gửi thông báo cho quản trị
- Gửi email cho quản trị

handleRegister(){
    xử lý đăng ký
    kiểm tra xem đăng ký thành công hay không?
    dispatchEvent: Registered
}

file khác:
listen Event Registered
sendEmailActive();
sendNotificationToAdmin();
sendEmailToAdmin();

Tính năng thanh toán
- Thêm sản phẩm vào giỏ hàng --> Dispatch Event
- Vào trang thanh toán --> Dispatch Event
- Thanh toán thành công --> Dispatch Event
- Thanh toán thất bại --> Distpatch Event
*/
