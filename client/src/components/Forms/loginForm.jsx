import React from 'react'
import '../../css/Form.css'

const LoginForm = (props) => {
  return (
    <div className="login-container">
      <p>LOGIN</p>
      <form onSubmit={(e) => props.handleLogin(e)}>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => props.handleChangeLogin(e)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => props.handleChangeLogin(e)}
          required
        />
        <button onSubmit={(e) => props.handleLogin(e)}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm