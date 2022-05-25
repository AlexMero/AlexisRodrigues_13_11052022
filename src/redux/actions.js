import axios from 'axios'

function login(loginFormData) {
  return async (dispatch) => {
    //je suis en train de charger
    dispatch({
      type: 'loading',
    })
    // console.log(loginFormData)
    try {
      const res = await axios.post('/user/login', loginFormData, {
        headers: { 'Content-Type': 'application/json' },
      })
      dispatch(loginSucceed(res.data.body.token))
      dispatch(checkToken(res.data.body.token))
    } catch (err) {
      dispatch({
        type: 'login_failed',
      })
    }
  }
}

const loginSucceed = (token) => ({
  type: 'login_succeed',
  payload: { token: token },
})

function checkToken(token) {
  return async (dispatch) => {
    //je suis en train de charger
    dispatch({
      type: 'loading',
    })
    try {
      const res = await axios.post(
        'user/profile',
        {},
        {
          headers: {
            Authorization: `Bearer ` + token,
          },
        }
      )
      dispatch(hydrateUser_success(res.data.body))
    } catch (err) {
      dispatch({
        type: 'ckeck_token_failed',
      })
    }
  }
}

const hydrateUser_success = (user) => ({
  type: 'hydrateUser_success',
  payload: user,
})

function editNameAction({ firstName, lastName, token }) {
  return async (dispatch) => {
    dispatch({
      type: 'loading',
    })
    try {
      await axios.put(
        'user/profile',
        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            Authorization: `Bearer ` + token,
          },
        }
      )
      dispatch({
        type: 'edit_name_success',
        payload: {
          firstName: firstName,
          lastName: lastName,
        },
      })
      dispatch({
        type: 'unloading',
      })
    } catch (error) {
      dispatch({
        type: 'unloading',
      })
    }
  }
}

export { login, checkToken, editNameAction }
