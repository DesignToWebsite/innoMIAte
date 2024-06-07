import { useState } from 'react'
import Footer from './common/All/Footer'
import Home_page from './Participants/Pages/Home_page'
import GlobalStyle from './style/GlobalStyle'
import { Route, Routes, useLocation } from 'react-router'
import Index from './Creator'
import Competition_page from './Participants/Pages/Competition_page'
import SignIn from './common/login/SignIn'
import LogIn from './common/login/Login'
import Profile1 from './Participants/Pages/Profile/Profile1'
import EditProfile from './Participants/Pages/Profile/EditProfile'
import Card0 from './Creator/request/card0'
import RequestForm from './Creator/request/requestForm'
import Navbar from './common/All/Navbar'
import Confirmation from './Acceuil/Pages/Confirmation'


function App() {
 const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <>
      <Navbar />
      
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home_page/>} />
        <Route path='/homeOrg' element={<Index/>} />
        <Route path="/competition/:id/*" element={<Competition_page />} />
        <Route path="/signUp" element={<SignIn/>} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path='/profile/*' element={<Profile1/>} />
        <Route path="/edit" element={<EditProfile/>} /> 
        <Route path="/index" element={<Index/>} />
        <Route path='/card0' element={<Card0 />} />
        <Route path='/requestForm' element={<RequestForm />} />
        <Route path="/confirmation" element={<Confirmation />}/>
      </Routes>
      
      <Footer />
      </>
    </>
  )
}

export default App
