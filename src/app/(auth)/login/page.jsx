"use client"
import axios from 'axios';
import React, {useState} from 'react'
const login = () => {
  const [user, setUser]=useState({
    email:"",
    password:"",
  })
  
  let url= "api/user/login"

  const handleChange = (e) => {
    e.preventDefault()
    // console.log(e.target);
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const submit=()=>{
    console.log(user);
    axios.post(url, {email:user.email, password:user.password}).then((result)=>{
      console.log(result);
    }).catch((Err)=>{
      console.log(Err);
    })
  }
  return (
    <div>
      <div action="">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />

        <button onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default login 