/**
 * @typedef {(
 * "login_loading"
 * | "login_succeed"
 * | "login_failed"
 * | "loadingProfile"
 * | "logout"
 * )} actionType
 */

const initialState = {
  isLogged: false,
  token: null,
  loading: false,
  error: false,
}

function makeInitialState() {
  return {
    ...initialState,
    token: localStorage.getItem('token'),
  }
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
const app = (state = makeInitialState(), action) => {
  switch (action.type) {
    case 'login_loading':
      return {
        ...state,
        loading: true,
      }
    case 'login_failed':
      const loginForm = document.getElementById('loginSection')
      loginForm.style.animation = ''
      void loginForm.offsetWidth
      loginForm.style.animation =
        'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
      return {
        ...state,
      }
    case 'login_succeed':
      localStorage.setItem('token', 'XXXX')
      return {
        ...state,
        token: action.payload.token.token,
        isLogged: true,
      }
    case 'loadingProfile': {
      return {
        ...state,
        loading: true,
      }
    }
    default:
      return state
  }
}

export default app
