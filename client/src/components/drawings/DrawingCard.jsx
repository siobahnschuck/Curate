import React from 'react'
import { useHistory } from 'react-router'
import '../../css/Profile.css'


const DrawingCard = (props) => {
  const history = useHistory()
  const handleEdit = (id) => {
    history.push(`/drawing/details/${id}`)
  }


  return (
    <div>
      <h2>Drawings</h2>
      <div className="drawing-card">
        {props.drawings.length ? props.drawings[0].map((drawing) => (
          <div key={drawing.id}>
            <img className="drawing" src={drawing.image} alt="drawing" />
            <button onClick={() => handleEdit(drawing.id)}>EDIT/DETAILS</button>
            <button onClick={() => props.deleteADrawing(drawing.filename, drawing.id)}>DELETE</button>
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default DrawingCard