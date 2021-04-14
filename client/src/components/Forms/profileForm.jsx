import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <form onSubmit={(e) => props.handleProfileSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={props.registerForm.username}
          onChange={(e) => props.handleProfileChange(e)}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={props.registerForm.email}
          onChange={(e) => props.handleProfileChange(e)}
        />
        <input
          type="text"
          name="bio"
          placeholder="bio"
          value={props.registerForm.bio}
          onChange={(e) => props.handleProfileChange(e)}
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          value={props.registerForm.location}
          onChange={(e) => props.handleProfileChange(e)}
        />
        <button onClick={(e) => props.handleProfileSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Profile