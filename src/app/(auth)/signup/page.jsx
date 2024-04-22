"use client"
import React, {useState} from 'react'

const signup = () => {  
  // const [first, setfirst] = useState(second)
  const [user, setUser]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <div>
      <form action="">
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
      </form>
    </div>
  )
}

export default signup