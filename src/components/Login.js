import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login-form">
            <h2>Login/Signup</h2>
            <input type="email" name="email" id="email" placeholder="Username" /> 
            <input type="password" name="password" id="password" placeholder="password" /> 
            <button type="submit">Login</button>
        </div>
    )
}

export default Login
