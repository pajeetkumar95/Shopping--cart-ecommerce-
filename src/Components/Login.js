import React, { useState } from 'react'

function Login() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  function handlesubmit(e){
    e.preventDefault()
  }

  return (
    <div className='setform'>
      <h1>Rajister For Our Ecommerce Site</h1>
      <form className='form' onSubmit={handlesubmit}>
        <input type='name' placeholder='Enter Your Name' value={name} onChange={(e) => { setName(e.target.value) }}>
        </input><br />
        <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => { setEmail(e.target.value) }}>
        </input><br />
        <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }}>
        </input><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login