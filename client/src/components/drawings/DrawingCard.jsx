import React from 'react'
import '../../css/Profile.css'


const DrawingCard = (props) => {
  return (
    <div>
      Drawing Cards...
      <div>
        {props.drawings.length ? props.drawings[0].map((drawing) => (
          <div>
            <img className="drawing" src={drawing.image} alt="drawing" />
            <button>+</button>
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default DrawingCard