import logo from '../../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * React component for the Header
 * @component
 */
function Header() {
  const dispatch = useDispatch()
  //@ts-ignore
  const { app, user } = useSelector((state) => state)

  function signOut(evt) {
    evt.preventDefault()
    dispatch({ type: 'logout' })
  }

  return (
    <nav className="main-nav">
      <Link to={'/'}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {app.isLogged ? (
        <div>
          <Link to={'/profile'} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </Link>
          <span className="main-nav-item" onClick={(evt) => signOut(evt)}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </span>
        </div>
      ) : (
        <div>
          <Link to={'/login'} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header
