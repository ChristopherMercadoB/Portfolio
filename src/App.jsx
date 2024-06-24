import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="inicio" className="mt-5">
        <Hero />
      </div>
      <div id="sobremi" className="mt-10">
        <About />
      </div>
      <div id="habilidades" className="mt-10">
        <Skill />
      </div>
      <div  id='proyectos' className="mt-10">
        <Project />
      </div>
      <div id="contacto" className="mt-20">
        <Contact />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default App;
