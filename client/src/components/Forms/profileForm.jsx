import React, { useEffect } from 'react'
import '../../css/Form.css'
import { connect } from 'react-redux'
import { addUser, getProfileData, updateProfile } from '../../store/actions/AuthActions'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAProfile: (id, body) => dispatch(updateProfile(id, body)),
    addNewUser: (name, value) => dispatch(addUser(name, value)),
    fetchProfileData: (id) => dispatch(getProfileData(id)),
  }
}

const ProfileForm = (props) => {
  const { registerForm, userInfo, currentUser } = props.authState
  useEffect(() => {
    props.fetchProfileData(currentUser.id)
  }, [])

  const handleProfileChange = (e) => {
    props.addNewUser(e.target.name, e.target.value)
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    props.updateAProfile(3, registerForm)
  }
  return (
    <div className="edit-prof-container">
      <h1 className="edit-prof-title"> EDIT YOUR PROFILE</h1>
      <div className="edit-container">
        <form className="edit-container" onSubmit={(e) => handleProfileSubmit(e)}>
          <p>Choose a new username</p>
          <input
            className="edit-input"
            type="text"
            name="username"
            placeholder={`@${userInfo.username}`}
            value={registerForm.username}
            onChange={(e) => handleProfileChange(e)}
          />
          <p>Update your email</p>
          <input
            className="edit-input"
            type="email"
            name="email"
            placeholder={userInfo.email}
            value={registerForm.email}
            onChange={(e) => handleProfileChange(e)}
          />
          <p>Public Bio - tell us about yourself</p>
          <input
            className="edit-input-bio"
            type="text"
            name="bio"
            placeholder={userInfo.bio}
            value={registerForm.bio}
            onChange={(e) => handleProfileChange(e)}
          />
          <p>Where in the world are you?</p>
          <input
            className="edit-input"
            type="text"
            name="location"
            placeholder={userInfo.location}
            value={registerForm.location}
            onChange={(e) => handleProfileChange(e)}
          />
          <button className="edit-btn" onClick={(e) => handleProfileSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)