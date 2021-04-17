import React from 'react'
import '../../css/Form.css'
import { Button } from 'react-bootstrap'

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
        <Button variant="outline-success" onSubmit={(e) => props.handleLogin(e)}>Login</Button>
      </form>
    </div>
  )
}

export default LoginForm