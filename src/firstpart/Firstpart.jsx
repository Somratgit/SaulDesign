import React, { useState } from 'react';

const FirstPart = () => {
  const [activeBtn, setActiveBtn] = useState(1); 
  return (
    <>
      <div className="container">
        <div className="flex">
          <div className="w-3/4 flex items-center">
            <img src="/images/Vector 187.png" alt="vector" />
            <div className="text">
              <h1 className="font-[poppins] font-bold text-8xl text-white leading-[96px]">
                CREATIVE UI <span className="text-[#00ADB5]">DESIGNER</span>
              </h1>

              <div className="btn flex gap-[24px] pt-[40px]">
                <div
                  onClick={() => setActiveBtn("hire")}
                  className={`btn1 w-[136px] text-center ${
                    activeBtn === "hire" ? "active-btn" : ""
                  }`}
                >
                  <a href="#">Hire me</a>
                </div>

                <div
                  onClick={() => setActiveBtn("cv")}
                  className={`btn1 w-[223px] text-center ${
                    activeBtn === "cv" ? "active-btn" : ""
                  }`}
                >
                  <a href="#">
                    Download CV{" "}
                    <span className="pl-[10px]">
                      <i className="fa-solid fa-download"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[260px] w-2/4">
            <div className="img">
              <img
                className="ml-auto"
                src="/images/doodles mixed round.png"
                alt="images"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPart;

