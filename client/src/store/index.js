import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import AuthReducer from './reducers/AuthReducer'
import DrawingReducer from './reducers/DrawingReducer'
import GalleryReducer from './reducers/GalleryReducer'

const store = createStore(
  combineReducers({
    authState: AuthReducer,
    drawState: DrawingReducer,
    galleryState: GalleryReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store