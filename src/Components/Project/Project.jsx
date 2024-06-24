import React, { useEffect, useState } from "react";
import proyectos from "../../data/data";
import "./Project.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [frontend, setFrontend] = useState(false);

  const handleFrontend = () => {
    setFrontend(false)
  }

  const handleBackend = () => {
    setFrontend(true)
  }

  const proyectFront = proyectos.filter((e) => e.area === "frontend");
  const proyectBack = proyectos.filter((e) => e.area === "backend");
  const animationSide = (number) => {
    if (number % 2 === 0) {
      return "fade-left";
    }

    return "fade-right";
  };

  const Front = proyectFront.map((e) => {
    return (
      <React.Fragment key={e.id}>
        <div
          className="individual wrapper"
          data-aos={animationSide(e.id)}
          data-aos-duration="800"
        >
          <h3>{e.name}</h3>
          <div className="image">
            <img src={e.img} alt={e.name} />
            <div className="contenido">
              <p className="text-center">{e.description}</p>
              <div className="buttons">
                <div className="btn-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={e.URL}
                    className="btn"
                  >
                    Ver
                  </a>
                </div>
                <div className="btn-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={e.github}
                    className="btn"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tecnologies">
            {e.tecnologies.map((t) => {
              <button className={t}>t</button>;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  });

  const Back = proyectBack.map((e) => {
    return (
      <React.Fragment key={e.id}>
        <div
          className="individual wrapper"
          data-aos={animationSide(e.id)}
          data-aos-duration="800"
        >
          <h3>{e.name}</h3>
          <div className="image">
            <img src={e.img} alt={e.name} />
            <div className="contenido">
              <p className="text-center">{e.description}</p>
              <div className="buttons">
                <div className="btn-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={e.github}
                    className="btn"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tecnologies">
            {e.tecnologies.map((t) => {
              <button className={t}>t</button>;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="project">
        <div className="button">
          <h1>Proyectos</h1>

          <button
            className={frontend ? "frontend" : "clicked"}
            onClick={handleFrontend}
          >
            Frontend
          </button>
          <button
            className={frontend ? "clicked" : "backend"}
            onClick={handleBackend}
          >
            Backend
          </button>
        </div>

        <div className="project-list">{frontend ? Back : Front}</div>
      </div>
    </>
  );
};

export default Project;
