import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducer'

// function getLocalStorage() {
//   const token = localStorage.getItem('token')
//   return token === null ? {} : { token }
// }

export const store = createStore(userReducer)
