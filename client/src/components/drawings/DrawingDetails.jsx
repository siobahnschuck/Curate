import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteDrawing, getDrawingById, setGalleryId, updateDrawing } from '../../store/actions/DrawingActions'
import { useParams } from 'react-router'
import { getUserGallery } from '../../store/actions/GalleryActions'
import * as AiIcons from 'react-icons/ai'


const mapStateToProps = ({ drawState, galleryState }) => {
  return { drawState, galleryState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDrawing: (id) => dispatch(getDrawingById(id)),
    updateDrawingGallery: (id, update) => dispatch(updateDrawing(id, update)),
    deleteADrawing: (filename, id) => dispatch(deleteDrawing(filename, id)),
    getId: (value) => dispatch(setGalleryId(value)),

    getuserGallery: (id) => dispatch(getUserGallery(id))
  }
}

const DrawingDetails = (props) => {
  const { selectedDrawing, galleryId } = props.drawState
  const { userGalleries } = props.galleryState
  const { id } = useParams()
  useEffect(() => {
    props.getDrawing(id)
    props.getuserGallery(selectedDrawing.user_id)
    // eslint-disable-next-lines
  }, [])

  const handleSubmit = (e, id, update) => {
    e.preventDefault()
    let updated = {
      gallery_id: update
    }
    props.updateDrawingGallery(id, updated)
  }
  return (
    <div className="draw-deets-container">
      <h2 className="draw-deets-title">DRAWING DETAILS</h2>
      <img className="deet-drawing" src={selectedDrawing.image} alt="lgDrawing" width="400" />
      <div className="draw-deets-info">
        <h3>{selectedDrawing.filename}</h3>
        <p>Created on: {selectedDrawing.created_at}</p>
        <h3>Change Gallery:</h3>
        <form onSubmit={(e) => handleSubmit(e, selectedDrawing.id, parseInt(galleryId))}>
          <select className="draw-gal-form" onChange={(e) => props.getId(e.target.value)}>
            {userGalleries[0].map((gal) => (
              <option
                key={gal.id}
                value={gal.id}
              >
                {gal.exhibition_title}
              </option>
            ))}
          </select>
          <div className="prof-button-draw">
            <button className="draw-btn"><AiIcons.AiFillSave /></button>
            <button className="draw-btn" onClick={() => props.deleteADrawing(selectedDrawing.id)}><AiIcons.AiTwotoneDelete /></button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingDetails)