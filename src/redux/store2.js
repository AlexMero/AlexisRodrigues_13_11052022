import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducer'

function getLocalStorage() {
  const token = localStorage.getItem('token')
  return token === null ? {} : { token }
}

const store = createStore(
  userReducer,
  // getLocalStorage(),
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
