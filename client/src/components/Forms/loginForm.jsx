import React from 'react'
import '../../css/Form.css'
import { Button } from 'react-bootstrap'

const LoginForm = (props) => {
  return (
    <div className="login-container">
      <p>LOGIN</p>
      <form onSubmit={(e) => props.handleLogin(e)}>
        <input
          className="login-input"
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => props.handleChangeLogin(e)}
          required
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => props.handleChangeLogin(e)}
          required
        />
        <button className="login-btn" variant="outline-success" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm