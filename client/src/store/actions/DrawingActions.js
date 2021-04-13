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

export const addDrawing = (name, value) => ({
  type: ADD_DRAWING,
  payload: {
    name: name,
    value: value
  }
})
