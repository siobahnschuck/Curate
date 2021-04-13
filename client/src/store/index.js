import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({

  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store