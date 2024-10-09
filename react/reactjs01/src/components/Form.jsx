import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Form() {
  const [form, setForm] = useState({email:"", password:""})
  const [errors, setErrors] = useState({email:"", password:""})
  const [users, setUsers] = useState([])
  const handleSubmitForm = (e) =>{
    e.preventDefault();
    console.log(form);
    console.log(errors);
    const errorsBag = {}
    if(!form.email){
        errorsBag.email = "Vui lòng nhập email"
    }
    if(!form.password){
        errorsBag.password = "Vui lòng nhập password"
    }
    setForm({email:"", password:""})
    setErrors(errorsBag)

    if(!Object.keys(errorsBag).length){
        setUsers([...users, form])
    }
  }
  
  const handleChangeValue = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div className='w-50 mx-auto py-3'>
        <h2 className='text-center'>Login</h2>
        <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
                <label htmlFor="">Email</label>
                <input onChange={handleChangeValue} value={form.email} className='form-control' type="text" name="email" placeholder="Email" />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="">Password</label>
                <input onChange={handleChangeValue} value={form.password} className='form-control' type="password" name="password" placeholder="Password" />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <div className="d-grid">
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        <hr />
        <ul>
            {users.map(({email, password}, index) => 
                <li key={index}>
                    {email} - {password}
                </li>
            )}
        </ul>
    </div>
  )
}
