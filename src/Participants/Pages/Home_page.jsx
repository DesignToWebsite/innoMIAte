import { useState } from 'react'
import Nav from  '../../common/All/Nav'
import Footer from '../../common/All/Footer'
import Header_Home from '../Components/Header_Home'
import Search from '../Components/Search'
import Card_small from '../../common/cards/shorcuts/Card'

const Home_page = ()=> {
 

  return (
    <>
     
      <Header_Home/>
      <Search />
      <Card_small/>
      
    </>
  )
}

export default Home_page
