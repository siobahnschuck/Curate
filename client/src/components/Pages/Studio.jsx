import React from 'react'
import Canvas from '../canvas/Canvas'
import DrawingTools from '../canvas/DrawingTools'

const Studio = () => {
  return (
    <div>
      <div className="canvas-container">
        <Canvas />
      </div>
      <DrawingTools />
    </div>
  )
}

export default Studio