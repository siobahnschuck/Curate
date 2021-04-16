import {
  Login,
  DeleteProfile,
  Register,
  UpdateProfile,
  Verify
} from '../../services/AuthServices'

import {
  REGISTER,
  LOGIN,
  UPDATE_PROFILE,
  DELETE_PROFILE,
  ADD_USER,
  ADD_LOGIN,
  CHECK_SESSION,
  SET_AUTHENTICATED,
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

export const setAuthenticated = (value) => ({
  type: SET_AUTHENTICATED,
  payload: value
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

export const updateProfile = (id, body) => async (dispatch) => {
  try {
    const updated = await UpdateProfile(id, body)
    dispatch({
      type: UPDATE_PROFILE,
      payload: updated
    })
  } catch (error) {
    throw error
  }
}

export const verifySession = (token) => async (dispatch) => {
  try {
    const verified = await Verify(token)
    dispatch({
      type: CHECK_SESSION,
      payload: verified
    })
  } catch (error) {
    throw error
  }
}