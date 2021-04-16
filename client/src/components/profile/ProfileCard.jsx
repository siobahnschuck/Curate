import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Profile.css'

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div>
        <h2>@{props.userInfo.username}</h2>
        <p>{props.userInfo.bio}</p>
        <p>{props.userInfo.location}</p>
        <Link className="prof-link" to='/edit'>edit profile</Link>
        {/* <button>follow</button> */}
      </div>
      <div>
        <h3>Activity</h3>
        <p>Galleries~ {props.userGalleries[0].length}</p>
        <p>Drawings~ {props.drawings.length}</p>
        <Link className="prof-link" to="/create/gallery">create an exhibition</Link>
      </div>
    </div>

  )
}

export default ProfileCard