import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handlelogin(e){
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handlelogin}>
                <label>Email :</label>
                <input type='email' placeholder='Enter Your Email'
                    value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label>Password :</label>
                <input type='password' placeholder='Enter Your Password'
                    value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <label>Login Page :</label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login