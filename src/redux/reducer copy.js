/**
 * @typedef {(
 * "loginSucceed"
 * | "hydrateUser"
 * | "hydrateUser_started"
 * | "hydrateUser_success"
 * | "hydrateUser_failed"
 * )} actionType
 */

import { combineReducers } from 'redux'
import { loadUserData } from '../services/dataManager'

const initialState = {
  isLogged: false,
  token: '',
  loading: false,
  error: false,
  user: {
    firstName: '',
    lastName: '',
  },
}

/**
 * [user description]
 *
 * @param   {Object}  state         [state description]
 * @param   {Object}  action        [action description]
 * @param   {actionType} action.type
 * @param   {Object}  action.payload
 *
 * @return  {Object}                [return description]
 */
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'loginSucceed':
      return {
        ...state,
        token: action.payload.token.token,
        isLogged: true,
      }
    case 'hydrateUser_started':
      return {
        ...state,
        loading: true,
      }
    case 'hydrateUser_success':
      return {
        ...state,
        user: action.payload,
      }
    case 'hydrateUser_failed':
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}

const userReducer = combineReducers({ user })

export { userReducer, initialState }
