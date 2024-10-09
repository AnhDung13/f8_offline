import React, { useEffect, useState } from 'react'

export default function App() {
   const [title, setTitle] = useState('F8');
   const handleChangeValue = (e) =>{
    setTitle(e.target.value)
   }
   useEffect(()=>{
    document.title = title
   })

    return (
        <div>
           <input type="text" onChange={handleChangeValue} />
        </div>
    )
}

/*
Hook useEffect(callback, dependencies?)
- null hoặc undefined --> Component re-render callback trong useEffect sẽ được gọi
- [] --> callback trong useEffect chỉ gọi khi component được render lần đầu tiên
- [bien1, bien2, ...] --> callback trong useEffect chỉ gọi khi 1 trong các biến thay đổi
*/