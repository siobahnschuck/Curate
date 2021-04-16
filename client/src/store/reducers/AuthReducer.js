const {
  REGISTER, 
  LOGIN, 
  UPDATE_PROFILE, 
  DELETE_PROFILE,
  ADD_USER,
  ADD_LOGIN,
  CHECK_SESSION,
  SET_AUTHENTICATED, 
  SESSION,
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
    case ADD_LOGIN: 
      return {
        ...state, 
        loginForm: {
          ...state.loginForm,
          [action.payload.name]: action.payload.value
        }
      }
    case REGISTER:
      return {...state}
    case LOGIN:
      return {...state, currentUser: action.payload}
    case CHECK_SESSION:
      return {...state, currentUser: action.payload}
    case SET_AUTHENTICATED:
      return {...state, authenticated: action.payload}
    case UPDATE_PROFILE:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.payload.name]: action.payload.value
        }
      }
    case DELETE_PROFILE:
      return {...state}
    default:
      return {...state}
  }
}

export default AuthReducer