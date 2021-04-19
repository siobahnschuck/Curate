import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { getGalleryDrawings } from '../../store/actions/GalleryActions'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

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
  const history = useHistory()
  useEffect(() => {
    props.getDrawings(id)
    // eslint-disable-next-line
  }, [])
  const redirect = () => {
    history.push('/profile')
  }

  const { galleryDrawings } = props.galleryState
  return (
    <div style={{ backgroundColor: "#388697" }}>
      <Button onClick={redirect} size="sm" variant="info" style={{ marginLeft: "1em" }}>Back to Profile</Button>
      <div className="drawing-card" >
        {galleryDrawings.length > 0 ? galleryDrawings.map((draw) => (
          <div key={draw.id}>
            <img className='gallery-drawing' src={draw.image} alt="drawing" />
          </div>
        )) : <h1>There are no drawings in this gallery</h1>}

      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryDetails)