import { loginSendData } from '../../services/dataManager'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, login, loginSucceed } from '../../redux/actions.js'

/**
 *
 * @component
 */
function Form() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  //@ts-ignore
  const { app, user } = useSelector((state) => state)
  console.log(app, user)
  if (!app.isLogged && app.token) {
    console.log('ok')
    getProfile(app.token)
  }

  // login({
  //   email: 'emailtest',
  //   password: 'pswdTest',
  // })

  // function submitLogin({ email, password }) {
  //   dispatch({ type: 'login_loading' })
  // }

  function templateLoading() {
    return <h1>loading</h1>
  }

  function templateForm() {
    return (
      <form onSubmit={(e) => handleSubmit(e)} id="loginForm">
        <div className="input-wrapper">
          <label>Username / email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label>Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        {/* <a href="/user" className="sign-in-button">
          Sign In
        </a> */}
        {/* <!-- SHOULD BE THE BUTTON BELOW -->
            <!-- <button className="sign-in-button">Sign In</button> -->
            <!--  --> */}
      </form>
    )
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    login({
      email: evt.target.elements.email.value,
      password: evt.target.elements.password.value,
    })
    // const isAuth = await loginSendData({
    //   email: evt.target.elements.email.value,
    //   password: evt.target.elements.password.value,
    // })
    // if (isAuth) {
    //   // console.log('in handleSubmit isAuth = true', isAuth)
    //   dispatch(loginSucceed({ token: isAuth.token }))
    //   return navigate('/profile')
    // } else {
    //   // console.log('in handleSubmit isAuth = false')
    // const loginForm = document.getElementById('loginSection')
    // loginForm.style.animation = ''
    // void loginForm.offsetWidth
    // loginForm.style.animation =
    //   'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
    // }
  }
  return app.loading ? templateLoading() : templateForm()
}

export default Form
