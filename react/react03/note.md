# Xây dựng hệ thống quản lý Global State

- useReducer
- Context API

# Custom Hook

- Hàm thông thường không dùng được Hook
- Muốn dùng Hook -->
  - Tạo component --> Không kế thừa được logic
  - Tạo Hook mới --> Kế thừa logic

Cách tạo Hook

- Tạo hàm bắt đầu bằng từ khóa use
- Không return về jsx mà sẽ return về các kiểu dữ liệu khác tùy theo nghiệp vụ:
  object, array, null, ...

# Lưu ý khi làm việc với Global State

- Các action khi dispatch thường là object --> gặp vấn đề khi thay đổi lại logic trong reducer hoặc thay dổi type, kiểu của payload
