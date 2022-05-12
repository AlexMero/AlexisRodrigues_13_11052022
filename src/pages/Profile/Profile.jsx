import Account from '../../components/Account/Account'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function Profile() {
  return (
    <div className="body">
      <Header isConnected={true} />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          amount={2082.79}
          description="Available Balance"
          title="Argent Bank Checking (x8349)"
        />
        <Account
          amount={10928.42}
          description="Available Balance"
          title="Argent Bank Savings (x6712)"
        />
        <Account
          amount={184.3}
          description="Current Balance"
          title="Argent Bank Credit Card (x8349)"
        />
      </main>
      <Footer />
    </div>
  )
}

export default Profile
