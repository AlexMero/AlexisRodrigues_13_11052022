/**
 * @typedef {(
 * "loginSucceed"
 * )} actionType
 */

import { combineReducers } from 'redux'

const initialState = {
  isLogged: false,
  token: '',
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
        token: action.payload.token,
        isLogged: true,
      }
    default:
      return state
  }
}

const userReducer = combineReducers({ user })

export default userReducer
