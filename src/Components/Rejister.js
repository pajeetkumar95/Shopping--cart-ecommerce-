import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Rajister() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState([])


  function handlesubmit(e) {
    e.preventDefault()
    const userDetails = {
      name: name,
      email: email,
      password: password
    }
    setData([...data, userDetails])
    alert("User Details Rajister Successful Please Login")
    console.log(userDetails)

  }
  useEffect(() => {
    localStorage.setItem("userform", JSON.stringify(data))
  }, [data])



  return (
    <div className='setform'>
      <h1>Rejister For Our Ecommerce Site</h1>
      <form className='form' onSubmit={handlesubmit}>
        <label>Name : </label>
        <input type='name' placeholder='Enter Your Name' value={name} onChange={(e) => { setName(e.target.value) }}>
        </input><br />
        <label>Email :</label>
        <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => { setEmail(e.target.value) }}>
        </input><br />
        <label>Password :</label>
        <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }}>
        </input><br />
        <label>Rejister Form</label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Rajister