import React from 'react'
import '../../css/Profile.css'
import { useHistory } from 'react-router'
import { CgImage } from 'react-icons/cg'
import * as AiIcons from 'react-icons/ai'

const GalleryCard = (props) => {
  const history = useHistory()
  const handleSubmit = (e, id) => {
    e.preventDefault()
    props.getDrawings(id)
    history.push(`gallery/details/${id}`)
  }
  return (
    <div className="gallery-card" >
      <h2 className="gallery-section-title">{props.userGalleries.length ? props.userGalleries[0].length : 0} galleries</h2>
      {props.userGalleries.length ?
        props.userGalleries[0].map((gallery) => (
          <div className="individual-gallery" key={gallery.id}>
            <h3>{gallery.exhibition_title}</h3>
            <p>{gallery.description}</p>
            <button className="draw-btns" onClick={(e) => handleSubmit(e, gallery.id)}
            ><CgImage /></button>
            <button className="draw-btns" onClick={() => props.deleteAGallery(gallery.id)}><AiIcons.AiTwotoneDelete /></button>
          </div>
        ))
        : null}
    </div>
  )
}

export default GalleryCard