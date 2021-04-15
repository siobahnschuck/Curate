import React from 'react'
import { useHistory } from 'react-router'

const GalleryCard = (props) => {
  const history = useHistory()
  const handleSubmit = (e, id) => {
    e.preventDefault()
    props.getDrawings(id)
    history.push(`gallery/details/${id}`)
  }
  return (
    <div className="gallery-card" >
      <h2 className="gallery-section-title">Galleries</h2>
      {props.userGalleries.length ?
        props.userGalleries[0].map((gallery) => (
          <div className="individual-gallery" key={gallery.id}>
            <h3>{gallery.exhibition_title}</h3>
            <p>{gallery.description}</p>
            <button onClick={(e) => handleSubmit(e, gallery.id)}
            >view drawings</button>
            <button onClick={() => props.deleteAGallery(gallery.id)}>-</button>
          </div>
        ))
        : null}
    </div>
  )
}

export default GalleryCard