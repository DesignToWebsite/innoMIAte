import { useEffect, useState } from 'react'
import Footer from './common/All/Footer'
import Home_page from './Participants/Pages/Home_page'
import GlobalStyle from './style/GlobalStyle'
import { Route, Routes, useLocation } from 'react-router'

import Navbar from './common/All/Navbar'
import Index from './Creator'
import Competition_page from './Participants/Pages/Competition_page'
import SignIn from './common/login/SignIn'
import LogIn from './common/login/Login'
import Profile1 from './Participants/Pages/Profile/Profile1'
import EditProfile from './Participants/Pages/Profile/EditProfile'
import Card0 from './Creator/request/card0'
import RequestForm from './Creator/request/requestForm'
import Confirmation from './Acceuil/Pages/Confirmation'
import axios from 'axios'
import Popup from './Participants/Components/notification/Popup'


function App() {
 const location = useLocation();

 const connectedUser = JSON.parse(localStorage.getItem('user'))
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
 //popup

 const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    // Define your popup configurations
    const popup = [
      {
        url: '/login?accountCreated',
        message: 'Account created successfully',
      },
      {
        url: 'loggedSuccessfully',
        message: 'Welcome to InnoMIAte',
      },
      // Add more popup configurations as needed
    ];

    // Check if the current pathname matches any popup URL
    const match = popup.find(item => window.location.href.includes(item.url));

    if (match) {
      setShowPopup(true);
      setPopupMessage(match.message);
      console.log('Popup matched:', match);
      // Optionally, automatically close popup after 10 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 10000);
    } else {
      setShowPopup(false);
      setPopupMessage('');
    }
  }, [location.pathname]);

  console.log('Current location:', location.pathname);
  console.log('Show popup:', showPopup);
console.log(showPopup)
  return (
    <>
      <GlobalStyle />
      <>
     {showPopup &&  <Popup message={popupMessage}/>}
      <Navbar />
      
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home_page/>} />
        <Route path="/competition/:id/*" element={<Competition_page />} />
        
        <Route path='/homeOrg' element={<Index/>} />
        <Route path="/signUp" element={<SignIn/>} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path='/profile/*' element={<Profile1/>} />
        <Route path="/edit" element={<EditProfile/>} /> 
        <Route path="/index" element={<Index/>} />
        <Route path='/card0' element={<Card0 />} />
        <Route path='/requestForm' element={<RequestForm />} />
        <Route path="/confirmation/:id" element={<Confirmation />}/>
      </Routes>
      
      <Footer />
      </>
    </>
  )
}

export default App
