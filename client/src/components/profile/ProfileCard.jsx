import React from 'react'
import { Link } from 'react-router-dom'
import * as HiIcons from 'react-icons/hi'
import * as AiIcons from 'react-icons/ai'
import '../../css/Profile.css'


const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div className="user-info-sec">
        <h2>@{props.userInfo.username}</h2>
        <p>{props.userInfo.bio}</p>
        <p><HiIcons.HiLocationMarker />{props.userInfo.location}</p>
        <Link className="prof-link" to='/edit'><AiIcons.AiFillEdit /> Edit Profile</Link>
      </div>
      <div className="activity">
        <h4>Activity</h4>
        <p>Galleries~ {props.userGalleries.length ? props.userGalleries[0].length : 0}</p>
        <p>Drawings~ {props.drawings.length ? props.drawings.length : 0}</p>
        <Link className="prof-link" to="/create/gallery">create an exhibition</Link>
      </div>
    </div>

  )
}

export default ProfileCard