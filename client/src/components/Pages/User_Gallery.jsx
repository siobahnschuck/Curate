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
  addGallery
} from '../../store/actions/GalleryActions'
import {
  getUserDrawings,
  deleteDrawing
} from '../../store/actions/DrawingActions'

const mapStateToProps = ({ galleryState, authState, drawState }) => {
  return { galleryState, authState, drawState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDrawings: (id) => dispatch(getUserDrawings(id)),
    deleteADrawing: (filename, id) => dispatch(deleteDrawing(filename, id)),
    getuserGallery: (id) => dispatch(getUserGallery(id)),
    createNewGallery: (body) => dispatch(createGallery(body)),
    deleteAGallery: (id) => dispatch(deleteGallery(id)),
    updateGallery: (id) => dispatch(updateGallery(id)),
    addAGallery: (name, value) => dispatch(addGallery(name, value))
  }
}

const UserGallery = (props) => {
  useEffect(() => {
    props.getuserGallery(3)
    props.fetchUserDrawings(3)
  }, [])

  const { newGallery, userGalleries } = props.galleryState
  const { drawings } = props.drawState
  const handleChange = (e) => {
    props.addAGallery(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = { ...newGallery, user_id: 3 }
    props.createNewGallery(obj)
    props.addAGallery('')
  }

  const handleEdit = (id) => {
    props.updateGallery(id)
  }
  
  const galleryProps = { handleChange, handleSubmit, newGallery }
  return (
    <div>
      Profile
      <div >
        <h3>Edit ur profile</h3>
        <ProfileForm />
      </div>
      <div>
        <h3>create an exhibition</h3>
        <GalleryForm {...galleryProps} />
      </div>
      <div>
        <GalleryCard
          userGalleries={userGalleries}
          deleteAGallery={props.deleteAGallery}
        />
      </div>
      <div className="draw-card-con">
        <h3>My drawings</h3>
        <DrawingCard
          drawings={drawings}
          deleteADrawing={props.deleteADrawing}
        />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserGallery)