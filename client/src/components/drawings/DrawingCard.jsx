import React from 'react'
import { useHistory } from 'react-router'
import '../../css/Profile.css'
import * as AiIcons from 'react-icons/ai'
import { CgMoreO } from 'react-icons/cg'


const DrawingCard = (props) => {
  const history = useHistory()
  const handleEdit = (id) => {
    history.push(`/drawing/details/${id}`)
  }


  return (
    <div >
      <h2 className="draw-title">{props.drawings.length ? props.drawings[props.drawings.length - 1].length : 0} Drawings</h2>
      <div className="drawing-cards">
        {props.drawings.length ? props.drawings[props.drawings.length - 1].map((drawing) => (
          <div className="drawing-con" key={drawing.id}>
            <img className="drawing" src={drawing.image} alt="drawing" />
            <button className="draw-btns" onClick={() => handleEdit(drawing.id)}><CgMoreO /></button>
            <button className="draw-btns" onClick={() => props.deleteADrawing(drawing.filename, drawing.id)}><AiIcons.AiTwotoneDelete /></button>
          </div>
        )) : null}
      </div>
    </div>
  )
}

export default DrawingCard