import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteDrawing, getDrawingById, updateDrawing } from '../../store/actions/DrawingActions'
import { useParams } from 'react-router'

const mapStateToProps = ({ drawState }) => {
  return { drawState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDrawing: (id) => dispatch(getDrawingById(id)),
    updateDrawingGallery: (id) => dispatch(updateDrawing(id)),
    deleteADrawing: (filename, id) => dispatch(deleteDrawing(filename, id))
  }
}

const DrawingDetails = (props) => {
  const { selectedDrawing } = props.drawState
  const { id } = useParams()
  useEffect(() => {
    props.getDrawing(id)
  }, [])
  return (
    <div>
      <div>
        <h2>INFO</h2>
        <img src={selectedDrawing.image} alt="lgDrawing" width="400" />
        <p>{selectedDrawing.filename}</p>
        <p>Created on: {selectedDrawing.created_at}</p>
        <p>Change Gallery: 
          
        </p>
        <button onClick={() => props.deleteADrawing(selectedDrawing.id)}>Delete</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingDetails)