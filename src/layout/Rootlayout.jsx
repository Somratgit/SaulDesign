import React from 'react'
import Navbar from '../Navbar/Header'
import { Outlet } from 'react-router'
import About from '../About me/About'

const Rootlayout = () => {
  return (
    <div> 
        <Navbar/> 
        <Outlet/>
    </div>
  )
}

export default Rootlayout