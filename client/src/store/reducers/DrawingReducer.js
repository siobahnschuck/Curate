const {
  CREATE_DRAWING,
  GET_USER_DRAWING,
  DELETE_DRAWING,
  IS_DRAWING,
  ADD_FILENAME,
  ADD_COORDINATES,
  UPDATE_DRAWING,
  IS_COVER,
  SELECTED_DRAWING, 
  SET_GALLERY_ID, 
  SET_COLOR, SET_THICK,
  SET_PEN_TYPE
} = require('../types.js')

const iState = {
  drawings: [],
  newDrawings: [],
  selectedDrawing: [],
  isDrawing: false, 
  coordinates: [],
  fileName: "", 
  isCover: false,
  galleryId:0,
  colorHexCode: '#000000',
  thickness: 1,
  penType: "round"
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
    case SET_GALLERY_ID:
      return {...state, galleryId: action.payload}
    case GET_USER_DRAWING:
      state.drawings.push(action.payload)
      return {...state}    
    case CREATE_DRAWING:
      return {...state, newDrawings: action.payload }
    case DELETE_DRAWING:
      return {...state}
    case UPDATE_DRAWING:
      return {...state}
    case SET_COLOR:
      return {...state, colorHexCode: action.payload}
    case SET_THICK:
      return {...state, thickness: action.payload}
    case SET_PEN_TYPE:
      return {...state, penType: action.payload}
    default:
      return {...state}
  }
}

export default DrawingReducer