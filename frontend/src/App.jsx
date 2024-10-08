import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Jobs from './components/Jobs'
import Error from './pages/Error'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
const App = () => {
  return (
   <BrowserRouter>
    <Navbar/>
      <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/description/:id" element={<JobDescription/>}/>
          <Route path="*" element={<Error/>}/>

      </Routes>
<ToastContainer/>
   </BrowserRouter>
  )
}

export default App

