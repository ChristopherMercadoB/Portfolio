import React from "react";
import "./Hero.css";
import imgProfile from "../../assets/IMG_6096.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img className="hero-img" src={imgProfile} alt="" />
        <h1>
          <span>Soy Christopher Mercado,</span> Desarrollador Fullstack
          orientado al backend
        </h1>
        <p>
          Mi pasión por la tecnología y el desarrollo de software me ha llevado
          a aprender continuamente y adaptarme a nuevas herramientas y
          metodologías
        </p>
        <div className="hero-action">
          <div className="hero-connect">Contactame</div>
          <div className="hero-resume">Mi CV</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
