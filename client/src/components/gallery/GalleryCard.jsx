import React from 'react'

const GalleryCard = (props) => {

  const handleSubmit = (e, id) => {
    e.preventDefault()
    props.getDrawings(id)
  }
  return (
    <div >
      gallery card
      {props.userGalleries.length ?
        props.userGalleries[0].map((gallery) => (
          <div key={gallery.id}>
            <h1>{gallery.exhibition_title}</h1>
            <p>{gallery.description}</p>
            <button onClick={(e) => handleSubmit(e, gallery.id)}
            >view drawings</button>
            {props.galleryDrawings.length ? props.galleryDrawings[0].map((draw) => (
              <img className="gallery-drawing" src={draw.image} alt="gallery-drawing" />
            )) : null}
            <button onClick={() => props.deleteAGallery(gallery.id)}>-</button>
          </div>
        ))
        : null}
    </div>
  )
}

export default GalleryCard