import React from 'react'
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
  setFilename
} from '../../store/actions/DrawingActions'
import {verifySession} from '../../store/actions/AuthActions'

const mapStateToProps = ({ drawState, authState }) => {
  return { drawState, authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isADrawing: (formValue) => dispatch(isDrawing(formValue)),
    addNewDrawing: (value, fileName, coords) => dispatch(addDrawing(value, fileName, coords)),
    createNewDrawing: (body) => dispatch(createDrawing(body)),
    fetchDrawings: () => dispatch(getDrawings()),
    deleteADrawing: (id) => dispatch(deleteDrawing(id)),
    setNewCoordinates: (coordinates) => dispatch(setCoordinates(coordinates)),
    setFileName: (fileName) => dispatch(setFilename(fileName)),
    
    verified: (token) => dispatch(verifySession(token))
  }
}


const Studio = (props) => {
  const handleChange = (e) => {
    props.setFileName(e.target.value)
  }
  return (
    <div className='studio'>
      <div className="canvas-container">
        <Canvas
          currentUser={props.authState.currentUser}
          isDrawing={props.drawState.isDrawing}
          isADrawing={props.isADrawing}
          addNewDrawing={props.addNewDrawing}
          setNewCoordinates={props.setNewCoordinates}
          coordinates={props.drawState.coordinates}
          setFileName={props.setFileName}
          fileName={props.drawState.fileName}
          handleChange={handleChange}
          verified={props.verified}
        />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Studio)