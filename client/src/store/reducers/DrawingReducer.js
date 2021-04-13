const {
  CREATE_DRAWING,
  GET_USER_DRAWING,
  DELETE_DRAWING,
  ADD_DRAWING,
  IS_DRAWING
} = require('../types.js')

const iState = {
  drawings: [],
  isDrawing: false, 
  coordinates: []
}

const DrawingReducer = (state= iState, action) => {
  switch (action.type) {
    case ADD_DRAWING:
      return {
        ...state, 
        coordinates: [...state.coordinates, action.payload]
      }
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