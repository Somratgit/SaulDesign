import React from 'react'
import './Futter.css'

const Futter = () => {
  return (
     <section>
        <div className="container">
            <div className="text-end block margin-0-auto">
                <ul className='ul1 flex gap-[48px] ml-[475px]  '>
                    <li><a className='text-[18px] text-[#EEEEEE] font-light' href="#"><span className='pr-[10px]'><i class="fa-regular fa-house"></i></span>Home</a></li>
                    <li><a className='text-[18px] text-[#EEEEEE] font-light' href="#"><span className='pr-[10px]'><i class="fa-light fa-user"></i></span>About me</a></li>
                    <li><a className='text-[18px] text-[#EEEEEE] font-light' href="#"><span className='pr-[10px]'><i class="fa-solid fa-phone"></i></span>Contact</a></li>
                </ul>
                <ul className='ul2 flex gap-[24px] pt-[38px] ml-[477px]'>
                     <li><a  href="#"><i class="fa-brands fa-facebook-f p-[24px] pt-[22px] text-[24px] pl-[28px] pr-[28px] bg-[#393E46] rounded-[50px] text-white"></i></a></li>
                    <li><a  href="#"><i class="fa-brands fa-instagram p-[24px] pt-[24px]   text-[24px] bg-[#393E46] rounded-[50px] text-white"></i></a></li>
                    <li><a  href="#"><i class="fa-brands fa-twitter p-[24px] pt-[24px] text-[24px] bg-[#393E46] rounded-[50px] text-white"></i></a></li>
                    <li><a  href="#"><i class="fa-brands fa-youtube p-[24px] pt-[24px] text-[24px] bg-[#393E46] rounded-[50px] text-white"></i></a></li>
                </ul>
                <p className='text-[rgb(238,238,238,75%)] text-[18px] pt-[92px] pb-[48px] font-light'>Terms of Service - Privacy Policy </p>
            </div>
        </div>
     </section>
  )
}

export default Futter