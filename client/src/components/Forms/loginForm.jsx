import React from 'react'
import '../../css/Form.css'

const LoginForm = () => {
  return (
    <div className="login-container">
      <p>LOGIN</p>
      <form>
        <input
          type="text"
          name="email"
          placeholder="email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm