const {
  CREATE_DRAWING,
  GET_USER_DRAWING,
  DELETE_DRAWING,
  IS_DRAWING,
  ADD_FILENAME,
  ADD_COORDINATES
} = require('../types.js')

const iState = {
  drawings: [],
  isDrawing: false, 
  coordinates: [],
  fileName: ""
}

const DrawingReducer = (state= iState, action) => {
  switch (action.type) {
    case ADD_COORDINATES:
      return {
        ...state, 
        coordinates: [...state.coordinates, action.payload]
      }
    case ADD_FILENAME:
      return {...state, fileName: action.payload}
    case IS_DRAWING:
      return {...state, isDrawing: action.payload}
    case GET_USER_DRAWING:
      return {...state, drawings: [...action.payload]}
    case CREATE_DRAWING:
      return {...state}
    case DELETE_DRAWING:
      return {...state}
    default:
      return {...state}
  }
}

export default DrawingReducer