import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [user,setUser]= useState([]);

    function handleSubmit(e) {
      e.preventDefault()
      const userDetails ={
        name:name,
        email:email,
        password:password,
      }
      console.log(userDetails)
      setUser([...user,userDetails])
      alert("user registered Please move to login page ")
     
      
    }
    useEffect(() => {
      localStorage.setItem("user" , JSON.stringify(user))
    } ,[user])
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Name :</label>
            <input type="text" required placeholder='Enter Your Name' value={name} onChange={(e)=>{setName(e.target.value)}}></input><br/>

            <label>Email :</label>
            <input type='email' required placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} ></input><br/>

            <label>Password :</label>
            <input type="password" required placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br/>

            <button>Submit</button>

          <Link to={"/"}><h1>Login</h1></Link>
       
        </form>
    </div>
  )
}




export default Signup