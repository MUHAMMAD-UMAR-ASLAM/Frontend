import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './componets/Header'
import SignUp from './pages/SignUp'
import SignIn from  './pages/SignIn'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-up' element={<SignUp/>}/> 
          <Route path='/sign-in' element={<SignIn/>}/>    

        </Routes>
     
    </BrowserRouter>

  )
}
