import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [creds, setCreds] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://mernbackend-2t16.onrender.com/api/creatuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: creds.name, email: creds.email, password: creds.password, geolocation: creds.geolocation })
        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credentials")
        }
    }
    const onChange = (event) => {
        setCreds({ ...creds, [event.target.name]: event.target.value })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="form-control" name='name' value={creds.name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name='email' value={creds.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange} name='password' value={creds.password} placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Address</label>
                    <input type="text" className="form-control" name='geolocation' onChange={onChange} value={creds.geolocation} placeholder="Address" />
                </div>

                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger '>Already a User?</Link>
            </form></div>
    )
}
