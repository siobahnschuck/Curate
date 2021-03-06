import '../../css/Profile.css'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import GalleryCard from '../gallery/GalleryCard'
import DrawingCard from '../drawings/DrawingCard'
import {
  getUserGallery,
  deleteGallery,
  updateGallery,
  getGalleryDrawings
} from '../../store/actions/GalleryActions'
import {
  getUserDrawings,
  deleteDrawing,
  updateDrawing
} from '../../store/actions/DrawingActions'
import {
  addUser,
  updateProfile,
  verifySession,
  getProfileData
} from '../../store/actions/AuthActions'
import ProfileCard from '../profile/ProfileCard'

const mapStateToProps = ({ galleryState, authState, drawState }) => {
  return { galleryState, authState, drawState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDrawings: (id) => dispatch(getUserDrawings(id)),
    deleteADrawing: (filename, id) => dispatch(deleteDrawing(filename, id)),
    updateADrawing: (id) => dispatch(updateDrawing(id)),

    fetchUserGallery: (id) => dispatch(getUserGallery(id)),
    deleteAGallery: (id) => dispatch(deleteGallery(id)),
    updateGallery: (id) => dispatch(updateGallery(id)),
    getDrawings: (id) => dispatch(getGalleryDrawings(id)),

    updateAProfile: (id, body) => dispatch(updateProfile(id, body)),
    addNewUser: (name, value) => dispatch(addUser(name, value)),
    verified: (token) => dispatch(verifySession(token)),
    fetchProfileData: (id) => dispatch(getProfileData(id))
  }
}

const UserGallery = (props) => {
  const { userGalleries, galleryDrawings } = props.galleryState
  const { drawings } = props.drawState
  const { authenticated, userInfo, currentUser } = props.authState
  useEffect(() => {
    if (authenticated) {
      props.fetchUserGallery(currentUser.id)
      props.fetchUserDrawings(currentUser.id)
      props.fetchProfileData(currentUser.id)
    }
    // eslint-disable-next-line
  }, [props.drawState.newDrawings])

  return (
    <div className="profile">
      <div className="profile-cover"></div>
      <div className="user-info">
        <ProfileCard
          userInfo={userInfo}
          drawings={drawings}
          userGalleries={userGalleries}
        />
      </div>
      <div className="gal-card-con">
        <GalleryCard
          userGalleries={userGalleries}
          deleteAGallery={props.deleteAGallery}
          getDrawings={props.getDrawings}
          galleryDrawings={galleryDrawings}
          currentUser={currentUser}
          fetchUserGallery={props.fetchUserGallery}
        />
      </div>
      <div className="draw-card-con">
        <DrawingCard
          drawings={drawings}
          deleteADrawing={props.deleteADrawing}
          updateADrawing={props.updateADrawing}
        />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserGallery)