import React from 'react'
import { connect } from 'react-redux'
import { createGallery, addGallery } from '../../store/actions/GalleryActions'
import { useHistory } from 'react-router-dom'
const mapStateToProps = ({ galleryState, authState }) => {
  return { galleryState, authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAGallery: (name, value) => dispatch(addGallery(name, value)),
    createNewGallery: (body) => dispatch(createGallery(body)),
  }
}

const GalleryForm = (props) => {
  const { newGallery } = props.galleryState
  const { currentUser } = props.authState
  const history = useHistory()
  const handleChange = (e) => {
    props.addAGallery(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = { ...newGallery, user_id: currentUser.id }
    props.createNewGallery(obj)
    props.addAGallery('')
    history.push('/profile')
  }
  return (
    <div className="gallery-form-container">
      <h1 className="gallery-form-title" >CREATE A NEW GALLERY</h1>
      <form className="gal-form">
        <p className="brief">What will you call this collection?</p>
        <input
          className="gal-input"
          type="text"
          name="exhibition_title"
          placeholder="exhibition title"
          value={newGallery.exhibition_title}
          onChange={(e) => handleChange(e)}
        />
        <p className="brief">A brief description</p>
        <input
          className="gal-input-description"
          type="text"
          name="description"
          placeholder="description"
          value={newGallery.description}
          onChange={(e) => handleChange(e)}
        />
        <button className="edit-btn" onClick={(e) => handleSubmit(e)}>save</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryForm)