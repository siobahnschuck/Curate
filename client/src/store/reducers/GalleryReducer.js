const {
  CREATE_GALLERY,
  ADD_GALLERY,
  GET_ALL_GALLERY,
  GET_USER_GALLERY,
  UPDATE_GALLERY,
  DELETE_GALLERY
} = require('../types')

const iState = {
  userGalleries: [],
  allGalleries: [],
  newGallery: {
    exhibition_title: '',
    description: ''
  }
}

const GalleryReducer = (state=iState, action) => {
  switch (action.type) {
    case ADD_GALLERY:
      return {
        ...state, 
        newGallery: {
          ...state.newGallery,
          [action.payload.name]: action.payload.value
        }
      }
    case CREATE_GALLERY:
      return {...state, userGalleries: [...state.userGalleries, state.newGaller]}
    case GET_USER_GALLERY:
      return {...state, userGalleries: [action.payload]}
    case GET_ALL_GALLERY:
      return {...state, allGalleries: [action.payload]}
    case DELETE_GALLERY:
      return {...state}
    case UPDATE_GALLERY:
      return {
        ...state,
        newGallery: {...state.newGallery}
      }
    default:
      return {...state}
  }
}

export default GalleryReducer