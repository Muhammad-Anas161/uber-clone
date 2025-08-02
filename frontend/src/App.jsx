import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import { UserLogout } from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectorWrapper from './pages/CaptainProtectorWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
            </UserProtectWrapper>
        }></Route>
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>
        }></Route>
        <Route path='/captain-home' element={
          <CaptainProtectorWrapper>
            <CaptainHome />
          </CaptainProtectorWrapper>
        }></Route>
        <Route path='/captain/logout' element={
          <UserProtectWrapper>
            <CaptainLogout/>
          </UserProtectWrapper>
        }></Route>
      </Routes>
    </div>
  )
}

export default App