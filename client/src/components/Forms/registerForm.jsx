import React from 'react'
import '../../css/Form.css'

const RegisterForm = (props) => {
  return (
    <div className="register-container">
      <p>create an account</p>
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={props.registerForm.username}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={props.registerForm.email}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          type="text"
          name="bio"
          placeholder="bio"
          value={props.registerForm.bio}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          value={props.registerForm.location}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={props.registerForm.password}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={props.registerForm.confirmPassword}
          onChange={(e) => props.handleChange(e)}
          required
        />
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default RegisterForm