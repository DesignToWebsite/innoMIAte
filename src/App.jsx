import { useEffect, useState } from 'react'
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
import axios from 'axios'
// import AddCompetition from './Admin/AddCompetition'


function App() {
 const location = useLocation();

 const connectedUser = JSON.parse(localStorage.getItem('user'))
//  const connectedUser =localStorage.getItem('user')
// console.log(connectedUser)
 const updateUser = async()=>{
    try{
      const url =  `http://localhost:5299/api/User/${connectedUser.id}?compInfo=false`
      const response = await axios.get(url)
      if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
        // console.log(response.data , "update the user info")
      }
    }catch(error){
      console.error(error)
    }
}
 useEffect(()=>{
  if(connectedUser)
     updateUser()
 },[])

  return (
    <>
      <GlobalStyle />
      <>
      <Navbar />
      
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home_page/>} />
        <Route path='/homeOrg' element={<Index/>} />
        <Route path="/competition/:id/*" element={<Competition_page />} />
        {/* <Route path="/signUp" element={<SignIn/>} /> */}
        <Route path="/logIn" element={<LogIn/>} />
        <Route path='/profile/*' element={<Profile1/>} />
        <Route path="/edit" element={<EditProfile/>} /> 
        <Route path="/index" element={<Index/>} />
        <Route path='/card0' element={<Card0 />} />
        <Route path='/requestForm' element={<RequestForm />} />
        <Route path="/confirmation/:id" element={<Confirmation />}/>
        {/* <Route path='/addCompetition' element={<AddCompetition />} /> */}
      </Routes>
      
      <Footer />
      </>
    </>
  )
}

export default App
