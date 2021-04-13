import {
  GetAllGallery,
  GetUserGallery,
  CreateGallery,
  DeleteGallery,
  UpdateGallery,
} from '../../services/GalleryServices'

import {
  CREATE_GALLERY,
  ADD_GALLERY,
  GET_ALL_GALLERY,
  GET_USER_GALLERY,
  UPDATE_GALLERY,
  DELETE_GALLERY
} from '../types'

export const getAllGallery = () => async (dispatch) => {
  try {
    const galleries = await GetAllGallery()
    dispatch({
      type: GET_ALL_GALLERY,
      payload: galleries
    })
  } catch (error) {
    throw error
  }
}

export const getUserGallery = () => async (dispatch) => {
  try {
    const galleries = await GetUserGallery()
    dispatch({
      type: GET_USER_GALLERY,
      payload: galleries
    })
  } catch (error) {
    throw error
  }
}

export const createGallery = () => async (dispatch) => {
  try {
    const newGallery = await CreateGallery()
    dispatch({
      type: CREATE_GALLERY,
      payload: newGallery
    })
  } catch (error) {
    throw error
  }
}

export const deleteGallery = () => async (dispatch) => {
  try {
    const deleted = await DeleteGallery()
    dispatch({
      type: DELETE_GALLERY,
      payload: deleted
    })
  } catch (error) {
    throw error
  }
}

export const updateGallery = () => async (dispatch) => {
  try {
    const updated = await UpdateGallery()
    dispatch({
      type: UPDATE_GALLERY,
      payload: updated
    })
  } catch (error) {
    throw error
  }
}

export const addGallery = (name, value) => ({
  type: ADD_GALLERY,
  payload: {
    name: name, 
    value, value
  }
})