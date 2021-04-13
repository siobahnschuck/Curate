const {
  CREATE_DRAWING,
  GET_USER_DRAWING,
  DELETE_DRAWING,
  ADD_DRAWING
} = require('../types.js')

const iState = {
  drawings: [],
  newDrawing: {
    image: '',
    coordinates: null
  }
}

const DrawingReducer = (state= iState, action) => {
  switch (action.type) {
    case ADD_DRAWING:
      return {
        ...state, 
        newDrawing: {
          ...state.newDrawing,
          [action.payload.name]: action.payload.value
        }
      }
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