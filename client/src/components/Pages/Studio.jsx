import React, { useEffect } from 'react'
import Canvas from '../canvas/Canvas'
// import DrawingTools from '../canvas/DrawingTools'
import { connect } from 'react-redux'
import {
  addDrawing,
  isDrawing,
  getDrawings,
  createDrawing,
  deleteDrawing,
  setCoordinates,
  setFilename,
  setGalleryId
} from '../../store/actions/DrawingActions'
import { verifySession } from '../../store/actions/AuthActions'
import { getUserGallery } from '../../store/actions/GalleryActions'

const mapStateToProps = ({ drawState, authState, galleryState }) => {
  return { drawState, authState, galleryState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isADrawing: (formValue) => dispatch(isDrawing(formValue)),
    addNewDrawing: (value, fileName, coords, id, galleryId) => dispatch(addDrawing(value, fileName, coords, id, galleryId)),
    createNewDrawing: (body) => dispatch(createDrawing(body)),
    fetchDrawings: () => dispatch(getDrawings()),
    deleteADrawing: (id) => dispatch(deleteDrawing(id)),
    setNewCoordinates: (coordinates) => dispatch(setCoordinates(coordinates)),
    setFileName: (fileName) => dispatch(setFilename(fileName)),
    SetGalleryId: (value) => dispatch(setGalleryId(value)),
    // updateDrawingGallery: (id, update) => dispatch(updateDrawing(id, update)),

    verified: (token) => dispatch(verifySession(token)),

    fetchUserGallery: (id) => dispatch(getUserGallery(id))
  }
}


const Studio = (props) => {
  const { userGalleries } = props.galleryState
  const { coordinates, fileName, isDrawing, galleryId } = props.drawState
  const { currentUser, authenticated } = props.authState
  const { addNewDrawing, setFileName, SetGalleryId, isADrawing, setNewCoordinates, fetchUserGallery } = props

  useEffect(() => {
    console.log('useEffect studio firing')
    console.log(currentUser)
    console.log(userGalleries)
    if (authenticated === true) {
      fetchUserGallery(currentUser.id)
    }
  }, [])
  const handleChange = (e) => {
    setFileName(e.target.value)
  }

  const canvasProps = { authenticated, galleryId, currentUser, userGalleries, isDrawing, coordinates, fileName, isADrawing, addNewDrawing, setFileName, SetGalleryId, setNewCoordinates, handleChange }
  return (
    <div className='studio'>
      <div className="canvas-container">
        <Canvas
          {...canvasProps}
        />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Studio)