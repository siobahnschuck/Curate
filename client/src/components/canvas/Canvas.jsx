import React, { useEffect, useRef, useState } from 'react'

const Canvas = (props) => {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.height = `${window.innerHeight}px`
    canvas.style.width = `${window.innerWidth}px`

    const context = canvas.getContext('2d', { preserveDrawingBuffer: true })
    context.scale(2, 2)
    context.lineCap = 'round'
    context.strokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context
  }, [])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    console.log('start drawing', offsetX, offsetY)
    props.isADrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    props.isADrawing(false)
  }
  const draw = ({ nativeEvent }) => {
    if (!props.isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
    props.setNewCoordinates({ x: offsetX, y: offsetY })
  }

  const clearDrawing = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  const saveDrawing = async () => {
    const save = canvasRef.current.toDataURL('image/png')
    const data = save.replace(/^data:image\/\w+:base64,/, '')
    const buf = Buffer.from(data, 'base64')
    await props.addNewDrawing(save, 'tryAgain', props.coordinates)
  }

  return (
    <div>
      <canvas
        height={window.innerHeight * 2}
        width={window.innerWidth * 2}
        style={{ width: `${window.innerWidth}px`, height: `${window.innerHeight}px` }}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <button onClick={clearDrawing}>clear from canvas</button>
      <button onClick={saveDrawing}>save from canvas</button>
    </div>
  )
}

export default Canvas