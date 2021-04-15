import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {  useParams } from 'react-router'
import { getGalleryDrawings } from '../../store/actions/GalleryActions'

const mapStateToProps = ({ galleryState }) => {
  return { galleryState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDrawings: (id) => dispatch(getGalleryDrawings(id)),
  }
}

const GalleryDetails = (props) => {
  useEffect(() => {
    props.getDrawings(id)
  }, [])
  const { galleryDrawings } = props.galleryState
  const { id } = useParams()
  return (
    <div className="drawing-card" >
      {galleryDrawings.length > 0 && id == galleryDrawings[0][0].gallery_id ? galleryDrawings[0].map((draw) => (
        <div key={draw.id}>
          <img className='gallery-drawing' src={draw.image} alt="drawing" />
        </div>
      )) : <h1>There are no drawings in this gallery</h1>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryDetails)