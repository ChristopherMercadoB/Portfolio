import React, { useEffect } from "react";
import "./Hero.css";
import imgProfile from "../../assets/IMG_6096.jpg";
import cv from "../../assets/CV.pdf";
import Typewriter from "typewriter-effect/dist/core";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "<Desarrollador Fullstack/>",
      "<Desarrollador web/>",
      "<Desarrollador de Software/>",
    ],
    loop: 100,
  });

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="hero contenedor">
        <img className="hero-img" src={imgProfile} alt="" />
        <h1>
          <span className="span">Christopher Mercado</span>
        </h1>
        <h2>
          <span>{text}</span>
          <Cursor />
        </h2>
        <p>
          Mi pasión por la tecnología y el desarrollo de software me ha llevado
          a aprender continuamente y adaptarme a nuevas herramientas y
          metodologías
        </p>
        <div data-aos="fade-up" data-aos-duration="500" className="hero-action">
          <div className="connect-group">
            <a href="">
              <i class="devicon-github-original icon-large"></i>
            </a>
            <a href="">
              <i class="devicon-linkedin-plain icon-large"></i>
            </a>
          </div>
          <div className="hero-resume">
            <a href={cv}>Ver Curriculum</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
