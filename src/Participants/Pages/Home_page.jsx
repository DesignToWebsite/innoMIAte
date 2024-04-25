import { useEffect, useState } from 'react'
import Nav from  '../../common/All/Nav'
import Footer from '../../common/All/Footer'
import Header_Home from '../Components/Header_Home'
import Search from '../Components/Search'
import Card_small from '../../common/cards/shorcuts/Card'
import Card from '../Components/Card'
import Cards_small from '../Components/Cards_small'
import FAQ from '../Components/FAQ'

const Home_page = ()=> {
  
  

  return (
    <>
     
      <Header_Home/>
      <Search />
      <FAQ/>
      <Cards_small />      
    </>
  )
}

export default Home_page
