import React from 'react'

export default function User({name, email}) {
  return (
    <div>
        {/* {children} */}
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        {/* <button onClick={onClick}>Click me</button> */}
    </div>
  )
}
