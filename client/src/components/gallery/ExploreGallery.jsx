import React from 'react'

const ExploreGallery = (props) => {
  return (
    <div className="explore-container">
      <div className="ex-gall-card">
        {props.allGalleries.length ? props.allGalleries[0].map((gallery) => (
          <div className="card">
            <h1>{gallery.exhibition_title}</h1>
            <p>{gallery.description}</p>
            <button onClick={() => props.handleExpand(gallery.id)}>View Details</button>
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default ExploreGallery