import axios from 'axios'
// import { serverBaseUrl } from '../services/dataManager.js'

export function login(loginFormData) {
  console.log('here_1')
  return async (dispatch) => {
    console.log('here_2')
    //je suis en train de charger
    dispatch({
      type: 'login_loading',
    })
    try {
      const res = await axios.post('/user/login', {
        'Content-Type': 'application/json',
        body: JSON.stringify(loginFormData),
      })
      dispatch(loginSucceed(res.data))
    } catch (err) {
      dispatch({
        type: 'login_failed',
      })
    }
  }
}

export const loginSucceed = (token) => ({
  type: 'login_succeed',
  payload: { token: token },
})

// export const hydrateUser = ({ token }) => {
//   return (dispatch) => {
//     dispatch(hydrateUser_started())

//     axios
//       .post('/user/profile', {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + token,
//       })
//       .then((res) => {
//         dispatch(hydrateUser_success(res.data))
//       })
//       .catch((err) => {
//         dispatch(hydrateUser_failed(err.message))
//       })
//   }
// }

// const hydrateUser_started = () => ({
//   type: 'hydrateUser_started',
// })

const hydrateUser_success = (user) => ({
  type: 'hydrateUser_success',
  payload: { user },
})

const hydrateUser_failed = (error) => ({
  type: 'hydrateUser_failed',
  payload: { error },
})

export function getProfile(token) {
  // console.log('here')
  return async (dispatch) => {
    //je suis en train de charger
    dispatch({
      type: 'loadingProfile',
    })
    try {
      const res = await axios.post('/user/profile', {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      })
      dispatch(hydrateUser_success(res.data))
    } catch (err) {
      dispatch(hydrateUser_failed(err.message))
    }
  }
}
