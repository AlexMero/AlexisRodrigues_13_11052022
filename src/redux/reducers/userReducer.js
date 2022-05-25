/**
 * @typedef {(
 * "hydrateUser_success"
 * | "edit_name_success"
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
    case 'hydrateUser_success':
      // console.log(action.payload)
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      }
    case 'edit_name_success':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      }
    default:
      return state
  }
}

export default user
