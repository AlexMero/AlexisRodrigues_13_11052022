/**
 * @typedef {(
 * "loading"
 * | "unloading"
 * | "login_succeed"
 * | "login_failed"
 * | "logout"
 * | "ckeck_token_failed"
 * | "hydrateUser_success"
 * | "hydrateUser_failed"
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
  // console.log('>>>', action)
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: true,
      }
    case 'unloading':
      return {
        ...state,
        loading: false,
      }
    case 'login_failed':
      const loginForm = document.getElementById('loginSection')
      loginForm.style.animation = ''
      void loginForm.offsetWidth
      loginForm.style.animation =
        'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
      return {
        ...state,
        loading: false,
      }
    case 'login_succeed':
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        isLogged: true,
        loading: false,
      }
    case 'ckeck_token_failed':
      localStorage.removeItem('token')
      return { ...state, token: null, loading: false }
    case 'hydrateUser_success':
      return { ...state, isLogged: true, loading: false }
    case 'hydrateUser_failed':
      localStorage.removeItem('token')
      return { ...state, isLogged: false, token: null }
    case 'logout':
      localStorage.removeItem('token')
      return { ...state, token: null, isLogged: false }
    default:
      return state
  }
}

export default app
