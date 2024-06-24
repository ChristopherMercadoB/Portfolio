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
        <div className="hero-action">
          <div
            className="connect-group"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <a
              href="https://github.com/ChristopherMercadoB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-original icon-large"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-mercado-8a8582310/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-linkedin-plain icon-large"></i>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="hero-resume"
          >
            <a href={cv}>Ver Curriculum</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
