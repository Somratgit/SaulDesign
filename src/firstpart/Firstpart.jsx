import React from 'react';

const FirstPart = () => {
  return (
    <>
    <div className="container">
      <div className="flex">
         <div className="w-3/4 flex items-center">
         <img src="../public/images/Vector 187.png" alt="vector" />
          <div className="text">
          <h1 className='font-[poppins] font-bold text-8xl text-white  leading-[96px]'>CREATIVE UI <span className='text-[#00ADB5]'>DESIGNER</span></h1>
           <div className="btn flex gap-[24px] pt-[40px]">
           <div className="btn1 w-[136px]"><a href="#">Hire me</a></div>
           <div className="btn1 w-[223px]"><a href="#">Download CV <span className='pl-[10px]'><i class="fa-solid fa-download"></i></span></a></div>
           </div>
          </div>
         </div>
          <div className='pt-[260px] w-2/4  '>
            <div className='img' >
              <img className='ml-auto' src="../public/images/doodles mixed round.png" alt="images" />
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default FirstPart;