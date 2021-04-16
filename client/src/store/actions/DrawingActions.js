import crypto from 'crypto'
import {
  GetDrawings,
  CreateDrawing,
  DeleteDrawing,
  GetUserDrawings,
  UpdateDrawing,
  GetDrawingById
} from '../../services/DrawingServices'

import {
  CREATE_DRAWING,
  GET_USER_DRAWING,
  DELETE_DRAWING,
  IS_DRAWING,
  ADD_COORDINATES,
  ADD_FILENAME,
  UPDATE_DRAWING,
  SELECTED_DRAWING,
  NEW_GALLERY,
} from '../types'

//GET METHODS

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

export const getUserDrawings = (id) => async (dispatch) => {
  try {
    const drawings = await GetUserDrawings(id)
    dispatch({
      type: GET_USER_DRAWING,
      payload: drawings
    })
  } catch (error) {
    throw error
  }
} 

export const getDrawingById = (id) => async (dispatch) => {
  try {
    const drawing = await GetDrawingById(id)
    dispatch({
      type: SELECTED_DRAWING,
      payload: drawing
    })
  } catch (error) {
    throw error
  }
}

//POST METHODS
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

export const addDrawing = (value, fileName, coords, id) => async (dispatch) => {
  try {
    let backUpFilename = crypto.randomBytes(12).toString('hex')
    const formData = new FormData()
    formData.append('image', value)
    formData.append('filename', `${fileName || backUpFilename}.png`)
    formData.append('coordinates', JSON.stringify(coords))
    formData.append('user_id', id)
    formData.append('gallery_id', 4)
    await dispatch(createDrawing(formData))
  } catch (error) {
    throw error
  }
}

//PUT METHODS

export const updateDrawing = (id, update) => async (dispatch) => {
  try {
    const updated = await UpdateDrawing(id, update)
    dispatch({
      type: UPDATE_DRAWING,
      payload: updated
    })
  } catch (error) {
    throw error
  }
}

//DELETE METHODS

export const deleteDrawing = (filename, id) => async (dispatch) => {
  try {
    const deleted = await DeleteDrawing(filename, id)
    dispatch({
      type: DELETE_DRAWING,
      payload: deleted
    })
  } catch (error) {
    throw error
  }
}



export const isDrawing = (formValue) => ({
  type: IS_DRAWING,
  payload: formValue
})

export const setCoordinates = (coordinates) => ({
  type: ADD_COORDINATES,
  payload: coordinates
})

export const setFilename = (fileName) => ({
  type: ADD_FILENAME,
  payload: fileName
})

export const setGalleryId = (value) => ({
  type: NEW_GALLERY,
  payload: value
})

