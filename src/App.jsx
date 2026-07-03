import React from 'react'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Profile from './components/Profile'
import { Routes } from 'react-router-dom'
import {Route } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  return (
    <div className='w-screen h-sccreen'>
      <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile />} />

      </Routes>       
    </div>
  )
}

export default App
