import React from 'react'


const GalleryCard = (props) => {
  console.log(props.userGalleries)
  return (
    <div>
      gallery card
      {props.userGalleries.length ?
        props.userGalleries[0].map((gallery) => (
          <div key={gallery.id}>
            <h1>{gallery.exhibition_title}</h1>
            <p>{gallery.description}</p>
          </div>
        ))
        : null}
    </div>
  )
}

export default GalleryCard