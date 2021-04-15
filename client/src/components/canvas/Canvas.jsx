import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import '../../css/Canvas.css'

const Canvas = (props) => {
  const [show, setShow] = useState(false)
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

  function convertToBlob(base64data) {
    var bs = atob(base64data);
    var buffer = new ArrayBuffer(bs.length);
    var ba = new Uint8Array(buffer);
    for (var i = 0; i < bs.length; i++) {
      ba[i] = bs.charCodeAt(i);
    }
    return new Blob([ba], { type: "image/png" });
  }
  const saveDrawing = async (e) => {
    e.preventDefault()
    const save = canvasRef.current.toDataURL('image/png')
    let blob = convertToBlob(save.replace("data:image/png;base64,", ""))
    await props.addNewDrawing(blob, props.fileName, props.coordinates)
    await setShow(true)
  }

  return (
    <div>
      <canvas
        className="canvas"
        height={window.innerHeight * 2}
        width={window.innerWidth * 2}
        style={{ width: `${window.innerWidth}px`, height: `${window.innerHeight}px` }}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <div>
        <Button size="sm" variant="outline-danger" onClick={clearDrawing}>clear drawing</Button>
        <form onSubmit={saveDrawing}>
          <input type="text" value={props.fileName} placeholder="save as" onChange={(e) => props.handleChange(e)} />
          {!show && <Button size="sm" variant="outline-info" onClick={saveDrawing}>save</Button>}
        </form>
        <Alert show={show} variant="success">
          <Alert.Heading>Drawing Saved</Alert.Heading>
          <p>Go to your profile to see all your drawings and move them to galleries</p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success"> close </Button>
          </div>
        </Alert>
        <div />
      </div>
    </div>
  )
}

export default Canvas