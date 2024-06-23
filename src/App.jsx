import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";

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
      <div className="mt-10">
        <Project />
      </div>
    </>
  );
};

export default App;
