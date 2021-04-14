import React, { useEffect } from 'react'
import GalleryForm from '../Forms/galleryForm'
import ProfileForm from '../Forms/profileForm'
import GalleryCard from '../gallery/GalleryCard'
import { connect } from 'react-redux'
import {
  getAllGallery,
  getUserGallery,
  createGallery,
  deleteGallery,
  updateGallery,
  addGallery
} from '../../store/actions/GalleryActions'

const mapStateToProps = ({ galleryState, authState }) => {
  return { galleryState, authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
  }, [])

  const { newGallery, userGalleries } = props.galleryState
  const handleChange = (e) => {
    props.addAGallery(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = { ...newGallery, user_id: 3 }
    props.createNewGallery(obj)
    props.addAGallery('')
  }
  const galleryProps = { handleChange, handleSubmit, newGallery }
  return (
    <div>
      Profile
      <div>
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
        />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserGallery)