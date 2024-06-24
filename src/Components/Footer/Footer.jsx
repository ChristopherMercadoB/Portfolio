import React from "react";
import "./Footer.css";
import email from "../../assets/email.svg";
import telefono from '../../assets/telefono.png'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <p>© Christopher Mercado, Desarrollador Full-Stack</p>
          <div className="footer-contact">
            <p>
              <div className="footer-item">
                <div className="footer-image">
                    <img src={email} alt="" />
                </div>
                <div className="footer-p">
                  <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSMVkxDlLTFXgSnnhpRMvMkdWmFdTBPVRmzcJLBzfgPSQWpFqgcSrhDKXxKkMDZXHBKTVHhL">
                    christopher300804@gmail.com
                  </a>
                </div>
              </div>
            </p>
            <div className="footer-item">
              <div className="footer-image">
                <img src={telefono} alt="" />
              </div>
              <div className="footer-p">
                <p>+1(829) 869-9263</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
