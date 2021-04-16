import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { SliderPicker } from 'react-color'
import { Link } from 'react-router-dom'
import '../../css/Canvas.css'
import { setGalleryId } from '../../store/actions/DrawingActions'

const Canvas = (props) => {
  const [show, setShow] = useState(false)
  const [colorHexCode, setColorHexCode] = useState('#000000')
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  // let mode = "pen"

  useEffect(() => {
    console.log(props)
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.height = `${window.innerHeight}px`
    canvas.style.width = `${window.innerWidth}px`

    const context = canvas.getContext('2d', { preserveDrawingBuffer: true })
    context.scale(2, 2)
    context.lineCap = 'round'
    context.strokeStyle = colorHexCode
    context.lineWidth = 5
    contextRef.current = context

    // let token = localStorage.getItem('token')
    // if (token) {
    //   props.verified(token)
    // }
  }, [props.userGalleries])

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
    const { offsetX, offsetY } = nativeEvent
    if (!props.isDrawing) {
      return
    }
    // if (mode === "pen") {
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
    props.setNewCoordinates({ x: offsetX, y: offsetY })
    // } else {
    //   // contextRef.current.globalCompositeOperation = "destination-out"
    //   // contextRef.current.arc(offsetX, offsetY, 8, 0, Math.PI * 2, false)
    //   contextRef.current.fill()
    // }
  }

  const clearDrawing = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    props.setNewCoordinates("")
  }

  // const eraser = () => {
  // }

  const undo = () => {
    // let coordClone = [].concat(props.coordinates)
    return props.coordinates.pop()
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
    console.log(props.userGalleries)
    let id = props.currentUser.id
    let galleryId = props.galleryId
    const save = canvasRef.current.toDataURL('image/png')
    let blob = convertToBlob(save.replace("data:image/png;base64,", ""))
    await props.addNewDrawing(blob, props.fileName, props.coordinates, id, galleryId)
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
        <SliderPicker
          color={colorHexCode}
          onChangeComplete={color => setColorHexCode(color.hex)}
        />
        {/* <Button size="sm" variant="outline-danger" onClick={mode = "pen"}>pen</Button>
        <Button size="sm" variant="outline-danger" onClick={mode = "eraser"}>eraser</Button> */}
        <Button size="sm" variant="outline-danger" onClick={undo}>undo</Button>
        <Button size="sm" variant="outline-danger" onClick={clearDrawing}>clear drawing</Button>
        <form onSubmit={saveDrawing}>
          <input type="text" value={props.fileName} placeholder="save as" onChange={(e) => props.handleChange(e)} />
          {props.userGalleries[0].length > 1 ?
            <select onChange={(e) => props.SetGalleryId(e.target.value)}>
              <option>Select a Gallery</option>
              {props.userGalleries[0].map((gal) => (
                <option key={gal.id} value={gal.id}>
                  {gal.exhibition_title}
                </option>
              ))}
            </select>
            : <Link to="/create/gallery">Create A Gallery</Link>}
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