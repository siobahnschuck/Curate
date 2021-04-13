const {
  REGISTER, 
  LOGIN, 
  UPDATE_PROFILE, 
  DELETE_PROFILE,
  ADD_USER
} = require('../types.js')

const iState = {
  currentUser: null,
  authenticated: false,
  loginForm: {
    email: '',
    password: ''
  },
  registerForm: {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
    location: '',
  }
}

const AuthReducer = (state=iState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.payload.name]: action.payload.value
        }
      }
    case REGISTER: 
      return {...state}
    case LOGIN: 
      return {
        ...state, 
        loginForm: {
          ...state.loginForm,
          [action.payload.name]: action.payload.value
        }
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        registerForm: {...state.registerForm}
      }
    case DELETE_PROFILE:
      return {...state}
    default:
      return {...state}
  }
}

export default AuthReducer