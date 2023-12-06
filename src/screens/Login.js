import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
  const [creds, setCreds] = useState({ email: "", password: "" })
let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://mernbackend-2t16.onrender.com/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: creds.email, password: creds.password, })
    });
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    if (json.success) {
      navigate("/");
    }
  }
  const onChange = (event) => {
    setCreds({ ...creds, [event.target.name]: event.target.value })
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" name='email' value={creds.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange} name='password' value={creds.password} placeholder="Password" />
        </div>
        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to="/creatuser" className='m-3 btn btn-danger '>I'm a New User</Link>
      </form></div>
  )
}
