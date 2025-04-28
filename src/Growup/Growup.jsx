import React from 'react'
import './Growup.css'

const Growup = () => {
  return (
    <section>
        <div className="container flex">
            <div className="w-2/4"> 
            <h1 className='h1-text pt-[258px] leading-[80px]'>Got a project in  <span className='text-[#00ADB5]'>mind? </span></h1>
            <div className="img flex items-center">
                 <div className="img1">
                 <img src="../public/images/images/down-Vector 186 (1).png" alt="images" />
                 </div>
                <img src="../public/images/images/growup.png" alt="images" />
            </div>
            </div>
             
             <div className="w-2/4">
             <img className='pt-[60px] pl-[100px]' src="../public//images/images/keyboard.png" alt="img" />
              
             <div className="forms flex gap-[24px] pt-[93px]">
               <div className="name"><label
                htmlFor="Name"
                className="block text-white font-bold mb-2"
              >
                Your name
              </label>
              <input
                type="Name"
                id="Name"
                name="Name"
                placeholder="Name"
                className="block w-[288px] rounded-md bg-[rgb(57,62,70,50%)] px-4 py-2 text-[#eeeeee80] font-bold   outline-none "
              /></div>


               <div className="email"><label
                htmlFor="Email"
                className="block text-white font-bold mb-2"
              >
                Your email
              </label>
              <input
                type="Email"
                id="Email"
                name="Email"
                placeholder="Email"
                className="block w-[288px] rounded-md bg-[rgb(57,62,70,50%)] px-4 py-2 text-[#eeeeee80] font-bold   outline-none "
              /></div>
               <div className="email"></div>
            </div> 
 
            <div className="message pt-[30px]">
              <label
             htmlFor="message"
              className="block text-white font-bold mb-2"
                 >
              Your Message
             </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-[600px] h-[280px] rounded-md bg-[rgba(57,62,70,0.5)] px-4 py-2 text-[#eeeeee80] font-bold   outline-none "
              />
            </div>
 
            <button className='btn1 font-bold text-[18px] mt-[34px]'><a href="#">Send Message <span className='pl-[10px]'><i class="fa-regular fa-paper-plane"></i></span></a></button>
             
             <img className='ml-[450px] mt-17px]' src="../public/images//images/mail.png" alt="img" />

             </div>
             
        </div>

        <div className="border-b-[1px] border-[#373c44] pt-[258px] mb-[100px]"></div>
    </section>
  )
}

export default Growup