import logo from '../../assets/argentBankLogo.png'

/**
 * React component for the Header
 * @param {Object} props - properties
 * @param {Boolean} [props.isConnected = false] - true if user is connect else false
 * @component
 */
function Header({ isConnected }) {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>

      {isConnected ? (
        <div>
          <a className="main-nav-item" href="/user">
            <i className="fa fa-user-circle"></i>
            Tony
          </a>
          <a className="main-nav-item" href="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      ) : (
        <div>
          <a className="main-nav-item" href="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      )}
    </nav>
  )
}

export default Header
