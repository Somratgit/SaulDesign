import React from 'react'
import './Header.css'
const navbar = () => {
  return (
    <>
 <navbar>  
  <div className=" border-b-[1px] border-[#373c44]">
    <div className="container nav flex justify-between py-[48px]   ">
      <div>
        <img src="images/navlogo.png" alt="logo" />
      </div>
      <ul className="flex gap-x-[48px] ">
        <li className="list"><a href="#">Home</a></li>
        <li className="list"><a href="#">Home</a></li>
        <li className="list"><a href="#">Home</a></li>
      </ul>
    </div>
  </div>
 </navbar>
    </>
  )
}

export default navbar