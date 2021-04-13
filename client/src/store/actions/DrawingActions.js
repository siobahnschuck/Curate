import {
  GetDrawings,
  CreateDrawing,
  DeleteDrawing
} from '../../services/DrawingServices'

import {
  ADD_DRAWING,
  CREATE_DRAWING,
  GET_USER_DRAWING,
  DELETE_DRAWING,
  IS_DRAWING,
} from '../types'

export const getDrawings = () => async (dispatch) => {
  try {
    const drawings = await GetDrawings()
    dispatch({
      type: GET_USER_DRAWING,
      payload: drawings
    })
  } catch (error) {
    throw error
  }
} 

export const createDrawing = (body) => async (dispatch) => {
  try {
    const newDrawing = await CreateDrawing(body)
    dispatch({
      type: CREATE_DRAWING,
      payload: newDrawing
    })
  } catch (error) {
    throw error
  }
}

export const deleteDrawing = () => async (dispatch) => {
  try {
    const deleted = await DeleteDrawing()
    dispatch({
      type: DELETE_DRAWING,
      payload: deleted
    })
  } catch (error) {
    throw error
  }
}

export const addDrawing = (value, fileName, coords) => async (dispatch) =>  {
  try {
    async function urltoFile(url, filename, mimeType) {
      // let res = await fetch(url)
      // let buf = res.arrayBuffer()
      return new File(Buffer.from(url.replace(/^data:image\/\w+;base64,/, ""),'base64'), `${filename}.png`, { type: mimeType })
    }
    let file = await urltoFile(value, fileName, 'image/png')
    // let file = new File(value, `${fileName}.png`, { type: 'image/png' })
    // function dataURItoBlob(dataURI) {
    //   var binary = atob(dataURI.split(',')[1]);
    //   var array = [];
    //   for(var i = 0; i < binary.length; i++) {
    //       array.push(binary.charCodeAt(i));
    //     }
    //     return new Blob([new Uint8Array(array)], {type: 'image/png'});
    //   }
    // let file = value
    console.log(file)
    const formData = new FormData()
    formData.append("image", file)
    formData.append("coordinates", JSON.stringify(coords))
    formData.append("user_id", 3)
    formData.append("gallery_id", 2)
    await dispatch(createDrawing(formData))
  } catch (error) {
    throw error
  }
}

export const isDrawing = (formValue) => ({
  type: IS_DRAWING,
  payload: formValue
})

export const setCoordinates = (coordinates) => ({
  type: ADD_DRAWING,
  payload: coordinates
})