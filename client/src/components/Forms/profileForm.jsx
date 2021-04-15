import React from 'react'
import { connect } from 'react-redux'
import { addUser, updateProfile } from '../../store/actions/AuthActions'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAProfile: (id, body) => dispatch(updateProfile(id, body)),
    addNewUser: (name, value) => dispatch(addUser(name, value))
  }
}

const ProfileForm = (props) => {
  const { registerForm } = props.authState
  const handleProfileChange = (e) => {
    props.addNewUser(e.target.name, e.target.value)
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    props.updateAProfile(3, registerForm)
  }
  return (
    <div>
      <form onSubmit={(e) => handleProfileSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={registerForm.username}
          onChange={(e) => handleProfileChange(e)}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={registerForm.email}
          onChange={(e) => handleProfileChange(e)}
        />
        <input
          type="text"
          name="bio"
          placeholder="bio"
          value={registerForm.bio}
          onChange={(e) => handleProfileChange(e)}
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          value={registerForm.location}
          onChange={(e) => handleProfileChange(e)}
        />
        <button onClick={(e) => handleProfileSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)