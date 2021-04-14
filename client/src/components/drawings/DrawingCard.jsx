import React from 'react'
import '../../css/Profile.css'


const DrawingCard = (props) => {
  return (
    <div>
      <div>
        {props.drawings.length ? props.drawings[0].map((drawing) => (
          <div key={drawing.id}>
            <img className="drawing" src={drawing.image} alt="drawing" />
            <button>+</button>
            <button onClick={() => props.deleteADrawing(drawing.filename, drawing.id)}>-</button>
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default DrawingCard