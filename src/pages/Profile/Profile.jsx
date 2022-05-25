import Account from '../../components/Account/Account'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { editNameAction } from '../../redux/actions'

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //@ts-ignore
  const { app, user } = useSelector((state) => state)

  const [editName, setEditName] = useState(false)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)

  useEffect(() => {
    if (!app.isLogged || !app.token) {
      navigate('/login')
    }
  }, [app.isLogged, app.token, navigate])

  const fullName = user.firstName + ' ' + user.lastName + ' !'
  return (
    <div className="body">
      <Header />
      <main className="main bg-dark">
        {editName ? (
          templateEditName()
        ) : (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {fullName}
            </h1>
            <button className="edit-button" onClick={() => setEditName(true)}>
              Edit Name
            </button>
          </div>
        )}

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

  function templateEditName() {
    return (
      <div className="header">
        <h1>Welcome back</h1>
        <form
          className="editNameContainer"
          onSubmit={(evt) => editNameSubmit(evt)}
        >
          <input
            type="text"
            className="firstNameInput"
            placeholder={firstName}
            id="firstNameInput"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="lastNameInput"
            placeholder={lastName}
            id="lastNameInput"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit" className="submitButton">
            Save
          </button>
          <button onClick={() => setEditName(false)} className="cancelButton">
            Cancel
          </button>
        </form>
      </div>
    )
  }

  function editNameSubmit(evt) {
    evt.preventDefault()
    dispatch(
      //@ts-ignore
      editNameAction({
        firstName: firstName,
        lastName: lastName,
        token: app.token,
      })
    )
    setEditName(false)
  }
}

export default Profile
