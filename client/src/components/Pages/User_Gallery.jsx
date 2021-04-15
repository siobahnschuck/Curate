import '../../css/Profile.css'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import GalleryForm from '../Forms/galleryForm'
import ProfileForm from '../Forms/profileForm'
import GalleryCard from '../gallery/GalleryCard'
import DrawingCard from '../drawings/DrawingCard'
import {
  getUserGallery,
  createGallery,
  deleteGallery,
  updateGallery,
  addGallery,
  getGalleryDrawings
} from '../../store/actions/GalleryActions'
import {
  getUserDrawings,
  deleteDrawing,
  updateDrawing
} from '../../store/actions/DrawingActions'
import {
  addUser,
  updateProfile
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

    getuserGallery: (id) => dispatch(getUserGallery(id)),
    createNewGallery: (body) => dispatch(createGallery(body)),
    deleteAGallery: (id) => dispatch(deleteGallery(id)),
    updateGallery: (id) => dispatch(updateGallery(id)),
    addAGallery: (name, value) => dispatch(addGallery(name, value)),
    getDrawings: (id) => dispatch(getGalleryDrawings(id)),

    updateAProfile: (id, body) => dispatch(updateProfile(id, body)),
    addNewUser: (name, value) => dispatch(addUser(name, value))
  }
}

const UserGallery = (props) => {
  const { newGallery, userGalleries, galleryDrawings } = props.galleryState
  const { drawings } = props.drawState
  useEffect(() => {
    props.getuserGallery(3)
    props.fetchUserDrawings(3)
  }, [])

  const handleChange = (e) => {
    props.addAGallery(e.target.name, e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = { ...newGallery, user_id: 3 }
    props.createNewGallery(obj)
    props.addAGallery('')
  }

  const handleProfileChange = (e) => {
    props.addNewUser(e.target.name, e.target.value)
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    props.updateAProfile(3, props.authState.registerForm)
  }

  const handleEdit = (id) => {
    props.updateGallery(id)
  }

  const handleAdd = (id) => {

  }

  const galleryProps = { handleChange, handleSubmit, newGallery }
  return (
    <div className="profile">
      Profile
      <div >
        <ProfileCard
        // load in current user state and map through
        />
        <h3>Edit ur profile</h3>
        <ProfileForm
          handleProfileChange={handleProfileChange}
          registerForm={props.authState.registerForm}
          handleProfileSubmit={handleProfileSubmit}
        />
      </div>
      <div>
        <h3>create an exhibition</h3>
        <GalleryForm {...galleryProps} />
      </div>
      <div>
        <GalleryCard
          userGalleries={userGalleries}
          deleteAGallery={props.deleteAGallery}
          getDrawings={props.getDrawings}
          galleryDrawings={galleryDrawings}
        />
      </div>
      <div className="draw-card-con">
        <h3>My drawings</h3>
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