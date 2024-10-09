import React from 'react'
import Form from './components/Form'

export default function App() {
  return (
    <Form/>
  )
}

/*
State: 
- Thay đổi dữ liệu trong nội bộ component
- Khi state thay đổi --> Component sẽ bị Re-render (Gọi lại)
- Không được thay đổi trực tiếp state mà phải thông qua hàm set

Trong Functional Component --> chỉ làm việc được với JSX, Props

Nếu muốn làm việc với State, Lifecycle,... --> sử dụng react hooks (^ phiên bản 16.8)

Hook: 
- Hàm đặc biệt cho phép functional component sử dụng các tính năng của reactjs
- Bắt đầu bằng từ khóa use 
- Chỉ sử dụng được trong functional component 
- Cho phép lập trình viên tự định nghĩa hook

*/