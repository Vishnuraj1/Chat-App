import React from 'react'
import Add from "../img/AddAvator.png"

const Register = () => {
  return (
    <div className='formContainer'>
       <div className='formWrapper'>
        <span className="logo">Chat app</span>
        <span className="title">Register</span>
          <form >
            <input type="text" placeholder='Username'/>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input style={{display:'none'}} type="file" id='file'/>
            <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add avatar</span>
            </label>
            <button>Sign up</button>
          </form>
          <p>You do have an account ?  Login</p>
       </div>
    </div>
  )
}

export default Register
