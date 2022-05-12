/**
 * @typedef {(
 * "authentification"
 * | "loginSucceed"
 * | "loginFailed"
 * )} actionType
 */

import { combineReducers } from 'redux'

const initialState = {
  isLogged: false,
  firstName: null,
  lastName: null,
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
    case 'authentification':
      return {
        ...state,
      }
    default:
      return state
  }
}

const userReducer = combineReducers({ user })
export default userReducer
