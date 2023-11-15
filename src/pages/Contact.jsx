import Location from "../images/location.png";
import emailBox from "../images/email-box.png";
import messageIcon from "../images/message-icon.png";
import contactMainImg from "../images/contact-mainImg.png";
import { ScrollArrow } from "../globalComponents";
import { LanguageContext } from "../services";
import { useContext, useEffect } from "react";

export default function Contact() {
  const { langs, language } = useContext(LanguageContext);

  useEffect(() => {
    const body = document.getElementById("body");
    const logo = document.querySelector(".logo");
    const globe = document.querySelector(".globe-svg");
    globe.style.display = "block";
    if (language === "en") {
      logo.style.fontFamily = "Kanit, sans-serif";
      body.style.fontFamily = "Kanit, sans-serif";
    } else {
      body.style.fontFamily = "FiraGo";
      body.style.fontFeatureSettings = `"case"`;
      logo.style.fontFamily = "Kanit, sans-serif";
    }
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");
    header.style.display = "block";
    footer.style.display = "block";
  });

  return (
    <section className="contact" id="contact">
      <div className="contact-top">
        <div className="contact-wrap">
          <h1 className="contact-title">
            <span className="contact-block"></span>{" "}
            {langs[language].contact.navLinkTitle}
          </h1>
        </div>
      </div>

      {/* start location-message-email section */}
      <div className="contact-container">
        <div className="contact-container-top">
          <div className="contact-container-1 contact-wrapper-box">
            <img
              className="contact-icon location-icon"
              src={Location}
              alt="location-icon"
            />
            <h2 className="contact-info-text">
              {langs[language].contact.h2first}:
            </h2>
            <p>Buxaidze street N17</p>
          </div>
          <div className="contact-container-2 contact-wrapper-box">
            <img
              className="contact-icon email-icon"
              src={emailBox}
              alt="email-icon"
            />
            <h2 className="contact-info-text">
              {langs[language].contact.h2second}:
            </h2>
            <p>fitfactory@gmail.com</p>
          </div>
          <div className="contact-container-3 contact-wrapper-box">
            <img
              className="contact-icon message-icon"
              src={messageIcon}
              alt="message-icon"
            />
            <h2 className="contact-info-text">
              {langs[language].contact.h2third}:
            </h2>
            <p>+(599) 599-09-08-09</p>
          </div>
        </div>
      </div>

      <div className="contact-sign">
        <div className="contact-sign-top">
          <div className="contact-sign-left">
            <img
              className="contact-main-image"
              src={contactMainImg}
              alt="contact-imageBox"
            />
          </div>
          <div className="contact-sign-right">
            <h3 className={langs[language].contact.form.h3className}>
              {langs[language].contact.form.h3}:
            </h3>
            <form
              action="https://formsubmit.co/00a206a35d4e3ef32ca5ec473880300d"
              method="POST"
              className="contact-flex"
            >
              <input
                id="username"
                type="text"
                name="Name"
                placeholder={
                  language === "ka" ? "* თქვნი სახელი" : "* Full Name"
                }
                required
                maxLength={40}
              />
              <input
                id="mail-input"
                type="email"
                name="Email"
                placeholder={
                  language === "ka" ? "* თქვნი მაილი" : "* Your Email"
                }
                required
              />
              <textarea
                placeholder={language === "ka" ? "* შეტყობინება" : "* Message"}
                name="Message"
                id=""
                cols="30"
                rows="10"
                required
                maxLength={200}
              ></textarea>
              <button
                type="submit"
                className={langs[language].contact.form.btnClassName}
              >
                {langs[language].contact.form.btn}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ScrollArrow />
    </section>
  );
}
