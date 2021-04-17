import React from 'react'
import { Button } from 'react-bootstrap'

const ExploreGallery = (props) => {
  return (
    <div className="explore-container">
      {props.allGalleries.length ? props.allGalleries[0].map((gallery) => (
        <div className="card">
          <h3>{gallery.exhibition_title}</h3>
          <p>{gallery.description}</p>
          <Button variant="dark" size="sm" onClick={() => props.handleExpand(gallery.id)}>Drawings</Button>
        </div>
      )) : null}
    </div>
  )
}

export default ExploreGallery