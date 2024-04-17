import { useState } from 'react'
import Footer from './common/All/Footer'
import Nav from './common/All/Nav'
import Home_page from './Participants/Pages/Home_page'
import GlobalStyle from './style/GlobalStyle'
import { Route, Routes, useLocation } from 'react-router'
import Index from './Creator'


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
      </Routes>

      <Footer />
      </>
    </>
  )
}

export default App
