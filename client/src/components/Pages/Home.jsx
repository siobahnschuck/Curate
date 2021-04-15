import React from 'react'
import RegisterForm from '../Forms/registerForm'
import { connect } from 'react-redux'
import { addUser, addLogin, createUser, createLogin } from '../../store/actions/AuthActions'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (name, value) => dispatch(addUser(name, value)),
    newLogin: (name, value) => dispatch(addLogin(name, value)),
    createNewUser: (formData) => dispatch(createUser(formData)),
    createLogin: (formData) => dispatch(createLogin(formData))
  }
}


const Home = (props) => {
  const { registerForm } = props.authState

  const handleChange = (e) => {
    props.addNewUser(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createNewUser(registerForm)
    props.addNewUser('', '')
  }


  const registerProps = { handleChange, handleSubmit, registerForm }
  return (
    <div className="home">
      <h1>HOME PAGE BODY</h1>
      <RegisterForm {...registerProps} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)