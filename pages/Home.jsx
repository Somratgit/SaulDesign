import React from "react";
import FirstPart from "../src/firstpart/Firstpart"; 
import Recentworks from "../src/Recent Works/Recentworks";
import Growup from "../src/Growup/Growup";
import Futter from "../src/Futter/Futter";  
import About from "../src/About me/About";

const Home = () => {
  return (
    <div>
      <FirstPart /> 
      <About/>
      <Recentworks/>
      <Growup/>
      <Futter/>
    </div>
  );
};

export default Home;
