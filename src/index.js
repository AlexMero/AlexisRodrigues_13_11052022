import './style/style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login'
import Error from './pages/Error/Error'
import Profile from './pages/Profile/Profile'
// import { StoreProvider } from './provider/Store'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    {/* <StoreProvider> */}
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      {/* </StoreProvider> */}
    </Provider>
  </React.StrictMode>
)
