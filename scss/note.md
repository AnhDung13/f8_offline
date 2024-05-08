# Cài đặt trình biên dịch

- cài đặt nodejs
- cài đặt sass

npm i sass -g

# Chạy lệnh biên dịch

1. biên dịch 1 file

sass duong-dan-nguon duong-dan-dich

watch mode: khi thay đổi file nguồn, tự động chạy lại lệnh biên dịch

thêm --watch

2. biên dịch cả folder

sass folder-scss:folder-css

lưu ý có thể thêm watch mode

3. Nén file css (minify)

sass duong-dan-file-scss duong-dan-file-css --style compressed
