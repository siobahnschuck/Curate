import React from 'react'
import RegisterForm from '../Forms/registerForm'
import { connect } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { addUser, addLogin, createUser, createLogin, setAuthenticated, checkSession, verifySession } from '../../store/actions/AuthActions'
import LoginForm from '../Forms/loginForm'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (name, value) => dispatch(addUser(name, value)),
    newLogin: (name, value) => dispatch(addLogin(name, value)),
    createNewUser: (formData) => dispatch(createUser(formData)),
    createNewLogin: (formData) => dispatch(createLogin(formData)),
    SetAuthenticated: (value) => dispatch(setAuthenticated(value)),
    CheckSession: (value) => dispatch(checkSession(value)),
    verifyLogin: () => dispatch(verifySession())
  }
}


const Home = (props) => {
  const { registerForm, loginForm, currentUser } = props.authState

  //AUTH
  // const session = () => {
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     props.SetAuthenticated(true)
  //   }
  // }

  const handleChange = (e) => {
    props.addNewUser(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    registerForm.password === registerForm.confirmPassword ?
      props.createNewUser(registerForm) : alert('Your password does not match')
  }

  const handleChangeLogin = (e) => {
    props.newLogin(e.target.name, e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await props.createNewLogin(loginForm)
      localStorage.setItem('token', currentUser.token)
      props.SetAuthenticated(true)
    } catch (error) {
      throw error
    }
  }


  const registerProps = { handleChange, handleSubmit, registerForm }
  const loginProps = { handleLogin, loginForm, handleChangeLogin }
  return (
    <div className="home">
      <h1>HOME PAGE BODY</h1>
      <RegisterForm {...registerProps} />
      <LoginForm {...loginProps} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)