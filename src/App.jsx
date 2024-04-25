import { useState } from 'react'
import Footer from './common/All/Footer'
import Nav from './common/All/Nav'
import Home_page from './Participants/Pages/Home_page'
import GlobalStyle from './style/GlobalStyle'
import { Route, Routes, useLocation } from 'react-router'
import Index from './Creator'
import Competition_page from './Participants/Pages/Competition_page'
import SignIn from './common/login/SignIn'
import LogIn from './common/login/Login'
import Profile1 from './Participants/Pages/Profile/Profile1'
import EditProfile from './Participants/Pages/Profile/EditProfile'


function App() {
 const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <>
      <Nav />

      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home_page/>} />
        <Route path='/homeOrg' element={<Index/>} />
        <Route path="/competition/:id/*" element={<Competition_page />} />
        <Route path="/signUp" element={<SignIn/>} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path='/profile/*' element={<Profile1/>} />
        <Route path='edit' element={<EditProfile/>} /> 
      </Routes>

      <Footer />
      </>
    </>
  )
}

export default App
