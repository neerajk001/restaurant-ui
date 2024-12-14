import { useState } from 'react'
import Navbar from './component/Navbar'
import Header from './component/Header'
import AboutUS from './component/AboutUS'


function App() {
  

  return (
    <>
    <div className='bg-black'>
    <Navbar/>
    <Header/>
    <AboutUS/>
    </div>
    </>
  )
}

export default App
