import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

/**
 * React component for the Error page
 * @component
 */
function Error() {
  return (
    <div className="body">
      <Header />
      <main className="main">
        <h1>404</h1>
        <h2>La page demandé est introuvable</h2>
        <a href="/">Retourner à la page d'accueil</a>
      </main>
      <Footer />
    </div>
  )
}

export default Error
