import React, { useState } from 'react';
import './Recentworks.css';

const Recentworks = () => {
  const [activeBtn, setActiveBtn] = useState("all"); // Initial active button is "All"

  return (
    <section
      style={{
        backgroundImage: "url(../public/images/images/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div>
          <h1 className="h1-text pt-[268px]">
            My recent <span className="text-[#00ADB5]">works</span>
          </h1>
        </div>
        <div className="btn pt-[16px]">
          <button
            className={`btn1 ${activeBtn === "all" ? "active-btn" : ""}`}
            onClick={() => setActiveBtn("all")}
          >
            <a href="#">All</a>
          </button>
          <button
            className={`btn1 ml-[16px] ${activeBtn === "ui" ? "active-btn" : ""}`}
            onClick={() => setActiveBtn("ui")}
          >
            <a href="#">UI</a>
          </button>
          <button
            className={`btn1 ml-[16px] ${activeBtn === "ux" ? "active-btn" : ""}`}
            onClick={() => setActiveBtn("ux")}
          >
            <a href="#">UX</a>
          </button>
          <button
            className={`btn1 ml-[16px] ${activeBtn === "web" ? "active-btn" : ""}`}
            onClick={() => setActiveBtn("web")}
          >
            <a href="#">Web Design</a>
          </button>
        </div>
        <div className="images flex gap-[48px] pt-[48px] pb-[269px]">
          <img src="../public/images/Frame 10.png" alt="images" />
          <img src="../public/images/Frame 11.png" alt="images" />
          <img src="../public/images/Frame 10 (1).png" alt="images" />
        </div>
      </div>
    </section>
  );
};

export default Recentworks;
