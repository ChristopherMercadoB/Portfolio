import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skill from "./Components/Skill/Skill";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5">
        <Hero />
      </div>
      <div className="mt-10">
        <Skill />
      </div>
    </>
  );
};

export default App;
