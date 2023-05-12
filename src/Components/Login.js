import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handlelogin(e) {
        e.preventDefault()
        const datastored = JSON.parse(localStorage.getItem('userform'))
        datastored.filter((data)=>{
            if(data.email===email && data.password===password){
                console.log(data.email,data.password)
                alert("Login Successful")
                navigate('/product')
            }
            else{
                alert('user not found')
            }
        })
    }


    return (
        <div className='login'>
            <form className='setlogin' onSubmit={handlelogin}>
                <input type='email' placeholder='Enter Your Email'
                    value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                <input type='password' placeholder='Enter Your Password'
                    value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login