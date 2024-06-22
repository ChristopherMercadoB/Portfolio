import React from "react";
import "./Skill.css";
import iconList from "../../icons/icon";

const Skill = () => {
  const iconFront = iconList.filter((e) => e.for === "frontend");
  const iconF = iconFront.map((e) => {
    return (
        <>
          <div className="icon-group">
            <img src={e.img} alt={e.for} />
            <p>{e.name}</p>
          </div>
        </>
      );
  });

  const iconBack = iconList.filter((e) => e.for === "backend");
  const iconB = iconBack.map((e) => {
    return (
      <>
        <div className="icon-group">
          <img src={e.img} alt={e.for} />
          <p>{e.name}</p>
        </div>
      </>
    );
  });

  const iconDB = iconList.filter((e) => e.for === "baseDato");
  const iconD = iconDB.map((e) => {
    return (
      <>
        <div className="icon-group">
          <img src={e.img} alt={e.for} />
          <p>{e.name}</p>
        </div>
      </>
    );
  });

  const iconOther = iconList.filter((e) => e.for === "otras");
  const iconO = iconOther.map((e) => {
    return (
      <>
        <div className="icon-group">
          <img src={e.img} alt={e.for} />
          <p>{e.name}</p>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="skill content">
        <h1>Habilidades</h1>
        <div className="skill-content">
          <div className="skill-box">
            <h3>Frontend</h3>
            <div className="skill-icons" id="front">
              {iconF}
            </div>
          </div>
          <div className="skill-box">
            <h3>Backend</h3>
            <div className="skill-icons" id="back">
              {iconB}
            </div>
          </div>
          <div className="skill-box">
            <h3>Bases de datos</h3>
            <div className="skill-icons" id="db">
              {iconD}
            </div>
          </div>
          <div className="skill-box">
            <h3>Otros</h3>
            <div className="skill-icons" id="other">
              {iconO}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
