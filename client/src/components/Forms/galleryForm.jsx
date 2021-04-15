import React from 'react'
import { connect } from 'react-redux'
import { createGallery, addGallery } from '../../store/actions/GalleryActions'

const mapStateToProps = ({ galleryState }) => {
  return { galleryState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAGallery: (name, value) => dispatch(addGallery(name, value)),
    createNewGallery: (body) => dispatch(createGallery(body)),
  }
}

const GalleryForm = (props) => {
  const { newGallery } = props.galleryState

  const handleChange = (e) => {
    props.addAGallery(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = { ...newGallery, user_id: 3 }
    props.createNewGallery(obj)
    props.addAGallery('')
  }
  return (
    <div>
      Gallery
      <form>
        <input
          type="text"
          name="exhibition_title"
          placeholder="exhibition title"
          value={newGallery.exhibition_title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={newGallery.description}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryForm)