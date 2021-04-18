import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { CirclePicker } from 'react-color'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react'
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
    contextRef.current = context
  }, [props.userGalleries])

  useEffect(() => {
    tools()
  }, [props.colorHexCode, props.thickness, props.penType])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
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
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
    props.setNewCoordinates({ x: offsetX, y: offsetY })
  }

  const tools = () => {
    contextRef.current.lineCap = props.penType
    contextRef.current.strokeStyle = props.colorHexCode
    contextRef.current.lineWidth = parseInt(props.thickness)
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

  const onSlide = (val) => {
    props.SetThick(val)
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

      <div className="toolbar">
        <ToggleButtonGroup onChange={(e) => props.SetPen(e)} size="sm" type="radio" name="options" defaultValue={"round"}>
          <ToggleButton variant="outline-info" value={"round"}>Round </ToggleButton>
          <ToggleButton variant="outline-info" value={"butt"}>Flat </ToggleButton>
          <ToggleButton variant="outline-info" value={"square"}>Square </ToggleButton>
        </ToggleButtonGroup>
        <input onChange={(e) => onSlide(e.target.value)} value={props.thickness} className="slider" type="range" min="1" max="50" />
        <Tippy interactive={true} placement={'right'} content={
          <CirclePicker
            className="picker"
            color={props.colorHexCode}
            onChangeComplete={color => props.SetColor(color.hex)}
          />
        }>
          <Button size="sm" variant="outline-info" >Select Color</Button>
        </Tippy>
        <Button size="sm" variant="outline-danger" onClick={undo}>undo</Button>
        <Button size="sm" variant="outline-danger" onClick={clearDrawing}>clear drawing</Button>
        {props.authenticated ? <form onSubmit={saveDrawing}>
          <input className="save-as" type="text" value={props.fileName} placeholder="save as" onChange={(e) => props.handleChange(e)} />
          {props.userGalleries[0] ?
            props.userGalleries[0].length ?
              <select className="canvas-dropdown" onChange={(e) => props.SetGalleryId(e.target.value)}>
                <option>Select a Gallery</option>
                {props.userGalleries[0].map((gal) => (
                  <option key={gal.id} value={gal.id}>
                    {gal.exhibition_title}
                  </option>
                ))}
              </select>
              : <Link to="/create/gallery">Create A Gallery</Link> : null}
          {!show && <Button className="canvas-save-btn" size="sm" variant="outline-info" onClick={saveDrawing}>save</Button>}
        </form> : null}
        <Alert show={show} variant="success">
          <Alert.Heading>Drawing Saved</Alert.Heading>
          <p>Go to your profile to see all your drawings and move them to galleries</p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success"> close </Button>
          </div>
        </Alert>
        <div />
      </div>
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
    </div>
  )
}

export default Canvas