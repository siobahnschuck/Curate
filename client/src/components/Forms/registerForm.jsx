import React from 'react'
import { Button } from 'react-bootstrap'
// import '../../css/Form.css'
import '../../css/Home.css'
import '../../css/Form.css'


const RegisterForm = (props) => {
  return (
    <div className="home-register-form-con">
      <p>create an account</p>
      <form className="home-form" onSubmit={(e) => props.handleSubmit(e)}>
        <input
          className="reg-in"
          type="text"
          name="username"
          placeholder="username"
          value={props.registerForm.username}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          className="reg-in"
          type="text"
          name="email"
          placeholder="email"
          value={props.registerForm.email}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          className="reg-in"
          type="text"
          name="bio"
          placeholder="bio"
          value={props.registerForm.bio}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          className="reg-in"
          type="text"
          name="location"
          placeholder="location"
          value={props.registerForm.location}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          className="reg-in"
          type="password"
          name="password"
          placeholder="password"
          value={props.registerForm.password}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          className="reg-in"
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={props.registerForm.confirmPassword}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <button className="login-btn" type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default RegisterForm