import {
  Login,
  DeleteProfile,
  Register,
  UpdateProfile,
} from '../../services/AuthServices'

import {
  REGISTER,
  LOGIN,
  UPDATE_PROFILE,
  DELETE_PROFILE,
  ADD_USER,
  ADD_LOGIN,
} from '../types'


export const addUser = (name, value) => ({
  type: ADD_USER,
  payload:{
    name: name,
    value: value
  }
})

export const addLogin = (name, value) => ({
  type: ADD_LOGIN,
  payload:{
    name: name,
    value: value
  }
})


export const createLogin = (formData) => async (dispatch) => {
  try {
    const login = await Login(formData)
    dispatch({
      type: LOGIN,
      payload: login
    })
  } catch (error) {
    throw error
  }
}

export const createUser = (formData) => async (dispatch) => {
  try {
    const register = await Register(formData)
    dispatch({
      type: REGISTER,
      payload: register
    })
  } catch (error) {
    throw error
  }
}

export const deleteProfile = () => async (dispatch) => {
  try {
    const deleted = await DeleteProfile()
    dispatch({
      type: DELETE_PROFILE,
      payload: deleted
    })
  } catch (error) {
    throw error
  }
}

export const updateProfile = () => async (dispatch) => {
  try {
    const updated = await UpdateProfile()
    dispatch({
      type: UPDATE_PROFILE,
      payload: updated
    })
  } catch (error) {
    throw error
  }
}