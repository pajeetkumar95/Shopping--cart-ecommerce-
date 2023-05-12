import React from 'react'

function Error() {
  return (
    <div>Error</div>
  )
}

export default Error


// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//     const [email,setEmail]= useState('');
//     const [password,setPassword]= useState('');
//     const navigate = useNavigate()
  

//     const handleSubmit=(e)=>{
//       e.preventDefault()
//       const storedDetails = JSON.parse((localStorage.getItem("user")))
//       storedDetails.filter((user) => {
//         if(user.email === email && user.password === password){
//           console.log(user.email,user.password)

//           alert("login successful")
//           navigate("/product")
//         }
//         else{
//           alert("user not found")
//         }

//       })
//       console.log(storedDetails)
      
//     }
    


//   return (
//     <div>
//         <form onSubmit={handleSubmit}>

//             <label>Email :</label>
//             <input type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} ></input><br/>

//             <label>Password :</label>
//             <input type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br/>

//             <button>Submit</button>
//             <Link to={"/signup"}>Click to signup</Link>
//         </form>
//     </div>
//   )
// }

// export default Login