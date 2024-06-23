import React, { useEffect } from "react";
import foto from "../../assets/IMG_6096.jpg";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="main">
        <div className="title" data-aos="fade-up" data-aos-duration="1000">
          <h1>
            <span className="span">Sobre mi</span>
          </h1>
        </div>
        <div
          className="cont about-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="item-list">
            <div className="about-item">
              <img src={foto} alt="Foto personal" />
            </div>
            <div className="about-item info">
              <p>
                Soy Christopher Mercado, estudiante de <span>Desarrollo de Software</span> en
                el Instituto Tecnológico de las Américas (ITLA), y tengo una
                sólida formación en tecnologías como C#, ASP.NET, MVC, SQL,
                JavaScript y PHP.
              </p>
              <br />
              <p>
                Desde 2022, he estado desarrollándome como <span>programador</span> con un
                enfoque principal en el lenguaje <span>C#</span>. A lo largo de este tiempo,
                he adquirido un conocimiento profundo y práctico en diversas
                tecnologías y marcos que complementan mis habilidades de
                programación.
              </p>
              <br />
              <p>
                He trabajado en proyectos que requieren una alta capacidad de
                <span>escalabilidad y eficiencia</span>, y tengo experiencia en el uso de
                <span>bases de datos SQL</span> para gestionar información de
                manera efectiva.
              </p>

          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
