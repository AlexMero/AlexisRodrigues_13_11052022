import { combineReducers } from 'redux'
import user from './reducers/userReducer'
import app from './reducers/appReducer'

const globalReducer = combineReducers({ app, user })

export default globalReducer
