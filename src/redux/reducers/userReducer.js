/**
 * @typedef {(
 *   "hydrateUser"
 * | "hydrateUser_started"
 * | "hydrateUser_success"
 * | "hydrateUser_failed"
 * )} actionType
 */

const initialState = {
  firstName: '',
  lastName: '',
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
    case 'hydrateUser_started':
      return {
        ...state,
        loading: true,
      }
    case 'hydrateUser_success':
      return {
        ...state,
        ...action.payload,
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

export default user
