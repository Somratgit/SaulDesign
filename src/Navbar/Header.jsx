 import React from 'react';
import './Header.css';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <div className="border-b-[1px] border-[#373c44]">
        <div className="container ">
         <div className='nav flex justify-between py-[48px]'>
         <div>
          <img src="images/navlogo.png" alt="logo" />
          </div>
          <ul className="flex gap-x-[48px]">
          <li className="list"><Link Link to="/home"  >Home</Link></li>
          <li className="list"><Link Link to="/Abouting"  >About Me</Link></li>
          <li className="list"><Link Link to="/RecentWorks"  >Recent Works</Link></li>
          <li className="list"><Link Link to="/Contact"  >Contact</Link></li>
          </ul>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 