# NextJS là gì ?

- NextJS là một thư viện đủ để dựng web
- ví dụ: muốn config router thì cần dùng react-router-dom thì next --> có sẵn

- next có thể config layout cho từng site và site chung

v.v

có app router và page router
chỉ khác nhau cấu trúc file nguyên lý vẫn vậy

# csr: client side rendering --> trình duyệt gửi request đi và nhận về js

sau khi nhận được js --> máy của client build ra html
ưu điểm: không nhất thiết cần máy chủ, server không cần render --> giảm bớt công việc --> nhanh
nhược điểm: khó SEO

# ssr: server side rendering

bắt buộc phải có server
server này sẽ render ra html đổ về trình duyệt
ưu điểm: seo, nhưng lần truy cập sau nhanh
nhược điểm:
server phải hoạt động nhiều
devops tìm cách cải thiện server
--> tăng chi phí

# ssg: static site generation
