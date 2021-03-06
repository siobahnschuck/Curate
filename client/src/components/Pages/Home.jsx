import React from 'react'
import RegisterForm from '../Forms/registerForm'
import logo from '../../imgs/currate_full-01.png'
import '../../css/Home.css'
import { connect } from 'react-redux'
import { addUser, createUser, setAuthenticated } from '../../store/actions/AuthActions'
import Footer from './Footer'

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

  const handleChange = (e) => {
    props.addNewUser(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (registerForm.password === registerForm.confirmPassword) {
      props.createNewUser(registerForm)
      props.addNewUser('', '')
    } else {
      alert('Your password does not match')
    }
  }

  const registerProps = { handleChange, handleSubmit, registerForm }
  return (
    <div className="home">
      <img className="home-logo" src={logo} width="600" alt="logo" />
      <h3 className="home-title">a digital art gallery created by its users</h3>
      <div className="home-register">
        <RegisterForm {...registerProps} />
      </div>
      <Footer />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)