import React from 'react'
import moment from 'moment'


const GalleryForm = (props) => {
  return (
    <div>
      Gallery
      <form>
        <input
          type="text"
          name="exhibition_title"
          placeholder="exhibition title"
          value={props.newGallery.exhibition_title}
          onChange={(e) => props.handleChange(e)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={props.newGallery.description}
          onChange={(e) => props.handleChange(e)}
        />
        <button onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default GalleryForm