import React from 'react'
import App from '../App'

function Login({handleLogin}) {
  return (
    <>
     <h1>Login</h1>
     <button 
     on onClick={handleLogin}
     className='btn btn-primary'>Log in</button> 
    </>
  )
}

export default Login
