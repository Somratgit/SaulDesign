import React from 'react'
import Navbar from './Navbar/Header' 
import FirstPart from './firstpart/Firstpart'
import About from './About me/About'
import Recentworks from './Recent Works/Recentworks'
import Growup from './Growup/Growup'
import Futter from './Futter/Futter'
 
const App = () => {
  return (
     <>
   <Navbar/>
   <FirstPart/>
   <About/>
   <Recentworks/>
   <Growup/>
   <Futter/>
    </>
  )
}

export default App
 