import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handlelogin(e) {
        e.preventDefault()
        // const StoredDeatails = JSON.parse(localStorage.getItem('userform'))
        // const user = StoredDeatails.filter((data) => {
        //     return data.email === email && data.password === password
        // })
        // if (user.length > 0) {
        //     console.log(user.email , user.password)
        //     alert("Login Successful")
        //     navigate('/product')
        // }
        // else {
        //     alert('user not found')
        // }

        const StoredDeatails = JSON.parse(localStorage.getItem('userform'))
        StoredDeatails.filter((data)=>{
            if(data.email===email && data.password===password){
                console.log(data.email , data.password)
                alert("Login Successful")
                navigate('/product')
            }
            else{
                alert('user not found')
            }
        })
        
        setEmail('')
        setPassword('')

        console.log(StoredDeatails)
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