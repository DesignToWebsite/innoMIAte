import { useState } from 'react'
import Nav from './common/All/nav'
import Footer from './common/All/Footer'
import Header_Home from './Participants/Components/Header_Home'
import Search from './Participants/Components/Search'
import Card_small from './common/cards/shorcuts/Card'
import GlobalStyle from './style/GlobalStyle'

function App() {
 

  return (
    <>
    <GlobalStyle/>
      <Nav />
      <Header_Home/>
      <Search />
      <Card_small/>
      <Footer />
    </>
  )
}

export default App
