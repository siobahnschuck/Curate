import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteDrawing, getDrawingById, setGalleryId, updateDrawing } from '../../store/actions/DrawingActions'
import { useParams } from 'react-router'
import { getUserGallery } from '../../store/actions/GalleryActions'

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
  }, [])

  const handleSubmit = (e, id, update) => {
    e.preventDefault()
    let updated = {
      gallery_id: update
    }
    props.updateDrawingGallery(id, updated)
  }
  return (
    <div>
      <div>
        <h2>INFO</h2>
        <img src={selectedDrawing.image} alt="lgDrawing" width="400" />
        <p>{selectedDrawing.filename}</p>
        <p>Created on: {selectedDrawing.created_at}</p>
        <p>Change Gallery:
          <form onSubmit={(e) => handleSubmit(e, selectedDrawing.id, parseInt(galleryId))}>
            <select onChange={(e) => props.getId(e.target.value)}>
              {userGalleries[0].map((gal) => (
                <option
                  key={gal.id}
                  value={gal.id}
                >
                  {gal.exhibition_title}
                </option>
              ))}
            </select>
            <button>SAVE</button>
          </form>
        </p>
        <button onClick={() => props.deleteADrawing(selectedDrawing.id)}>Delete</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingDetails)