import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Profile.css'

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div>
        {/* your profile
      NOTE: map thru currentUser state after AUTH
      Have edit profile button lead to form component */}
        <h2>@username</h2>
        <p>bio goes here </p>
        <p>location</p>
        <Link className="prof-link" to='/edit'>edit profile</Link>
        <button>follow</button>
      </div>
      <div>
        <h3>Activity</h3>
        <p>Galleries</p>
        <p>Drawings</p>
        <Link className="prof-link" to="/create/gallery">create an exhibition</Link>
      </div>
    </div>

  )
}

export default ProfileCard