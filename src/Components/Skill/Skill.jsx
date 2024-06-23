import React, { useEffect } from "react";
import "./Skill.css";
import iconList from "../../icons/icon";
import Aos from "aos";
import 'aos/dist/aos.css'

const Skill = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  const iconFront = iconList.filter((e) => e.for === "frontend");
  const iconF = iconFront.map((e) => {
    return (
      <>
          <img src={e.img} alt={e.for} />
      </>
    );
  });

  const iconBack = iconList.filter((e) => e.for === "backend");
  const iconB = iconBack.map((e) => {
    return (
      <>
          <img src={e.img} alt={e.for} />
      </>
    );
  });

  const iconDB = iconList.filter((e) => e.for === "baseDato");
  const iconD = iconDB.map((e) => {
    return (
      <>
          <img src={e.img} alt={e.for} />
      </>
    );
  });

  const iconOther = iconList.filter((e) => e.for === "otras");
  const iconO = iconOther.map((e) => {
    return (
      <>
          <img src={e.img} alt={e.for} />
      </>
    );
  });

  return (
    <>
      <div className="skill">
        <h1 data-aos="fade-up" data-aos-duration='1000'><span className="span">Habilidades</span></h1>
        <div className="skill-content content">
          <div className="skill-box" data-aos="fade-up" data-aos-duration="1000">
            <h3>Frontend</h3>
            <div data-aos="zoom-in" data-aos-duration="500"  className="skill-icons" id="front">
              {iconF}
            </div>
          </div>
          <div className="skill-box" data-aos="fade-up" data-aos-duration="1000">
            <h3>Backend</h3>
            <div data-aos="zoom-in" data-aos-duration="500" className="skill-icons" id="back">
              {iconB}
            </div>
          </div>
          <div className="skill-box" data-aos="fade-up" data-aos-duration="1000">
            <h3>Bases de datos</h3>
            <div data-aos="zoom-in" data-aos-duration="500" className="skill-icons" id="db">
              {iconD}
            </div>
          </div>
          <div className="skill-box" data-aos="fade-up" data-aos-duration="1000">
            <h3>Otros</h3>
            <div data-aos="zoom-in" data-aos-duration="500" className="skill-icons" id="other">
              {iconO}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
