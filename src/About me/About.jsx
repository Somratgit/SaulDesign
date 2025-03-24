import React from 'react';
import './about.css';

const About = () => {
  return (
 <section>
      <div className="container flex">
      <div className="left w-2/4 pt-[135px]">
        <div>
           <img src="../public/images/images//music-vector.png" alt="" />
        </div>
        <h1 className=' h1-text flex items-center   pt-[74px]'> About<span className='text-[#00ADB5] pl-[14px]'>me</span>  <span className='img pl-[26px]'><img src="../public/images/images/lightbulb.png" alt="" /></span></h1>
        <p className='pera w-[344px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....<span className="text-white font-semibold  hover:text-blue-500 -2">
            Read more
          </span></p>
          <img className='pt-[65px] pl-[161px]' src="../public/images/images/up-Vector 186.png" alt="vector" />
      </div>
      <div className="right pt-[230px]">
        <img src="../public/images/images/reserach.png" alt="img" />
      </div> 
    </div>
    <div className="border border-b-[1px] border-[#373c44] mt-[69px] mb-[132px]"></div>
 </section>
     
  );
};

export default About;