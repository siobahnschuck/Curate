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
} from '../types'

export const createLogin = () => async (dispatch) => {
  try {
    const login = await Login()
    dispatch({
      type: LOGIN,
      payload: login
    })
  } catch (error) {
    throw error
  }
}

export const createUser = () => async (dispatch) => {
  try {
    const register = await Register()
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

export const updateProfile = () => (dispatch) => {
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