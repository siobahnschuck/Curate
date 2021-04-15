const {
  CREATE_DRAWING,
  GET_USER_DRAWING,
  DELETE_DRAWING,
  IS_DRAWING,
  ADD_FILENAME,
  ADD_COORDINATES,
  UPDATE_DRAWING,
  IS_COVER,
  SELECTED_DRAWING
} = require('../types.js')

const iState = {
  drawings: [],
  selectedDrawing: [],
  isDrawing: false, 
  coordinates: [],
  fileName: "", 
  isCover: false
}

const DrawingReducer = (state= iState, action) => {
  switch (action.type) {
    case ADD_COORDINATES:
      return {
        ...state, 
        coordinates: [...state.coordinates, action.payload]
      }
    case SELECTED_DRAWING:
      return {...state, selectedDrawing: action.payload}
    case ADD_FILENAME:
      return {...state, fileName: action.payload}
    case IS_DRAWING:
      return {...state, isDrawing: action.payload}
    case IS_COVER:
      return {...state, isCover: action.payload}
    case GET_USER_DRAWING:
      return {...state, drawings: [...state.drawings, action.payload]}
    case CREATE_DRAWING:
      return {...state}
    case DELETE_DRAWING:
      return {...state}
    case UPDATE_DRAWING:
      return {...state}
    default:
      return {...state}
  }
}

export default DrawingReducer