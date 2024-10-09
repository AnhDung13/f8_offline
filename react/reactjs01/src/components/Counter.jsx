import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const increase = ()=>{
    setCount(count+1)
  }
  const decrease = ()=>{
    setCount(count-1)
  }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
    </div>
  )
}
