import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Form from '../../components/Form/Form'
import { useContext } from 'react'
import { StoreContext } from '../../provider/Store'
import * as React from 'react'

/**
 * React component for the Login page
 * @component
 */
function Login() {
  // const [store, updateStore] = useContext(StoreContext)

  return (
    <div className="body">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content" id="loginSection">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login
