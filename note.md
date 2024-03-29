# làm thế nào để thiết kế web tương thích với các thiết bị?

- Adaptive: tạo ra 1 giao diện khác sử dụng chung dữ liệu với bản desktop
  --> dựa vào thiết bị để chuyển giao diện
- responsive: sử dụng css để ẩn/hiện các thành phần ở các kích thước màn hình khác nhau
  --> dựa vào kích thước màn hình để thay đổi giao diện

# Responsive

- responsive web design (RWD)
- thiết kế web đáp ứng
- sử dụng kích thước màn hình để thay đổi giao diện

## Breakpoint

- điểm kích thước màn hình (chiều rộng) mà tại đó giao diện sẽ thay đổi
- không có breakpoint cố định / chuẩn trong dự án
- chỉ có breakpoint phổ biến
- mẹo tìm các breakpoint phổ biến: tham khảo các css framework

các breakpoint phổ biến

- 576px
- 768px
- 992px
- 1200px
- 1400px

## Media Queries

- At-rules CSS

```css
@media all|screen|print and (min-width: value) and (max-width: value2);
```

### Cách 1: Desktop First

```css
@media screen and (max-width: 1399px){
    selector css
}

@media screen and (max-width: 1199px){
    selector css
}

@media screen and (max-width: 991px){
    selector css
}

@media screen and (max-width: 767px){
    selector css
}

@media screen and (max-width: 575px){
    selector css
}

```

### Cách 2: mobile first

```css
@media screen and (min-width: 576px){
    selector css
}

@media screen and (min-width: 768px){
    selector css
}

@media screen and (min-width: 992px){
    selector css
}

@media screen and (min-width: 1200px){
    selector css
}

@media screen and (min-width: 1400px){
    selector css
}

```
