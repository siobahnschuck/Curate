import React from 'react'

const Profile = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          type="text"
          name="bio"
          placeholder="bio"
        />
        <input
          type="text"
          name="location"
          placeholder="location"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Profile