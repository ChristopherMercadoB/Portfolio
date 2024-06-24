import React, {useRef} from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_cbfurog', 'template_kygl98r', form.current, {
            publicKey: 'PlsANP3lCJSjfS3s8',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
  return (
    <>
      <div className="container-form" data-aos="fade-up">
        <fieldset>
          <legend>Contactame</legend>

          <form ref={form} onSubmit={sendEmail} action="">
            <div className="form-item">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                placeholder="Nombre"
                name="user_name"
                id="name"
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">Correo:</label>
              <input
                type="text"
                placeholder="Correo Electronico"
                name="user_email"
                id="email"
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="desc">Mensaje:</label>
              <textarea
                type="text"
                placeholder="Mensaje"
                id="desc"
                required
                name="message"
              ></textarea>
            </div>
            <div className="center">
            <button className="btn color-gray" type="submit">
              Enviar
            </button>
            </div>
          </form>
        </fieldset>
      </div>
    </>
  );
};

export default Contact;
