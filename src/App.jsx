import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5">
        <Hero />
      </div>
    </>
  );
};

export default App;
