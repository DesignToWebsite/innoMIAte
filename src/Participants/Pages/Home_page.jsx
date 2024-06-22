import { useEffect, useState } from 'react'
import Header_Home from '../Components/homePage/Header_Home'
import Search from '../Components/general/Search'
// import Card_small from '../../common/cards/shorcuts/Card'
// import Card from '../Components/Card'
// import Cards_small from '../Components/Cards_small'
import FAQ from '../Components/homePage/FAQ'
import Cards_small from '../Components/homePage/Cards_small'

const Home_page = ()=> {
  
  

  return (
    <>
     
      <Header_Home/>
      <Search />
      <Cards_small />    
      <FAQ/>

    </>
  )
}

export default Home_page
