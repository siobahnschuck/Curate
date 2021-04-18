import React, { useState } from 'react'
import RegisterForm from '../Forms/registerForm'
import logo from '../../imgs/logo_400px.png'
import '../../css/Home.css'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addUser, addLogin, createUser, createLogin, setAuthenticated, verifySession } from '../../store/actions/AuthActions'
import { Alert } from 'react-bootstrap'
import About from './About'

const mapStateToProps = ({ authState }) => {
  return { authState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (name, value) => dispatch(addUser(name, value)),
    createNewUser: (formData) => dispatch(createUser(formData)),
    SetAuthenticated: (value) => dispatch(setAuthenticated(value)),
  }
}

const Home = (props) => {
  const { registerForm } = props.authState
  const [show, setShow] = useState(true)
  const history = useHistory()

  const handleChange = (e) => {
    props.addNewUser(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    registerForm.password === registerForm.confirmPassword ?
      props.createNewUser(registerForm) : alert('Your password does not match')
    props.addNewUser('', '')
  }

  const registerProps = { handleChange, handleSubmit, registerForm }
  return (
    <div className="home">
      <h1 className="home-title">CURATE</h1>
      <img className="home-logo" src={logo} width="200" alt="logo" />
      <div className="home-register">
        <RegisterForm {...registerProps} />
      </div>
      {/* <About /> */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)