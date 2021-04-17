import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
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
  const { id } = useParams()
  useEffect(() => {
    props.getDrawings(id)
    // eslint-disable-next-line
  }, [])
  const { galleryDrawings } = props.galleryState
  return (
    <div className="drawing-card" >
      {galleryDrawings.length > 0 ? galleryDrawings.map((draw) => (
        <div key={draw.id}>
          <img className='gallery-drawing' src={draw.image} alt="drawing" />
        </div>
      )) : <h1>There are no drawings in this gallery</h1>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryDetails)