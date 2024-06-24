import React from "react";
import './Contact.css'
import Aos from "aos";
import 'aos/dist/aos.css'

const Contact = () => {
  return (
    <>
      <div className="container-form" data-aos='fade-up'>
        <fieldset>
          <legend>Contactame</legend>

          <form action="">
            <div className="form-item">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" />
            </div>
            <div className="form-item">
              <label htmlFor="email">Correo</label>
              <input type="text" id="email" />
            </div>
            <div className="form-item">
              <label htmlFor="desc">Descripcion</label>
              <textarea type="text" id="desc"></textarea>
            </div>
          </form>
        </fieldset>
      </div>
    </>
  );
};

export default Contact;
