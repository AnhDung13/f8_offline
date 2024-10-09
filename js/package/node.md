# Package

## Vấn đề

- Nặng, khó di chuyển
- Gỡ bỏ và cập nhập --> Gặp khó khăn

## Giải pháp

- Công cụ quản lý thư viện (package, dependencies)
- Thông qua store (Chợ)
- Với js: npm, yarn,...

## Khởi tạo dự án với npm

npm init -y

## Các chế độ cài đặt thư viện

Simple Dependencies --> Thư viện chạy dự án (Chạy ở production)

npm i libname hoặc npm install libname

Develop Dependencies --> Thư viện chạy môi trường phát triển (Dev)

npm i libname --save-dev hoặc npm install libname --save-dev

## Xóa thư viện đã cài đặt

npm uninstall libname

## Cài đặt các dependencies

npm install hoặc npm i

chỉ cài đặt dependencies production

npm install --productt hoặc npm i --product

## Phiên bản

- Cài đặt thư viện theo phiên bản

npm i libname@libversion

- Cập nhật phiên bản thư viện

npm update libname

- Cập nhật tất cả thư viện

npm update
