"use client"
import axios from 'axios';
import React, {useState} from 'react'

const signup = () => {
  const [user, setUser]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  })
  
  let url= "api/user/register"

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
    axios.post(url, {firstname:user.firstname, lastname:user.lastname, email:user.email, password:user.password}).then((result)=>{
      console.log(result);
    }).catch((Err)=>{
      console.log(Err);
    })
  }
  return (
    <div>
      <div action="">
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          className="border bg-cyan-500"
          id="firstname"
          name="firstname"
          value={user.firstname}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={user.lastname}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
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

export default signup