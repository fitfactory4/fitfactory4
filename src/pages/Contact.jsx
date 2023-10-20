import Location from "../images/location.png";
import emailBox from "../images/email-box.png";
import messageIcon from "../images/message-icon.png";
import contactMainImg from "../images/contact-mainImg.png";
import { ScrollArrow } from "../globalComponents";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-top">
        <div className="contact-wrap">
          <h1 className="contact-title">
            <span className="contact-block"></span> CONTACT
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
            <h2 className="contact-info-text">LOCATION:</h2>
            <p>Buxaidze street N17</p>
          </div>
          <div className="contact-container-2 contact-wrapper-box">
            <img
              className="contact-icon email-icon"
              src={emailBox}
              alt="email-icon"
            />
            <h2 className="contact-info-text">EMAIL US:</h2>
            <p>fitfactory@gmail.com</p>
          </div>
          <div className="contact-container-3 contact-wrapper-box">
            <img
              className="contact-icon message-icon"
              src={messageIcon}
              alt="message-icon"
            />
            <h2 className="contact-info-text">CALL US:</h2>
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
            <h3>SEND US MESSAGE:</h3>
            <form
              action="https://formsubmit.co/00a206a35d4e3ef32ca5ec473880300d"
              method="POST"
              className="contact-flex"
            >
              <input
                id="username"
                type="text"
                name="Name"
                placeholder="* Full Name"
                required
                maxLength={40}
              />
              <input
                id="mail-input"
                type="email"
                name="Email"
                placeholder="* Your Email"
                required
              />
              <textarea
                placeholder="* Message"
                name="Message"
                id=""
                cols="30"
                rows="10"
                required
                maxLength={200}
              ></textarea>
              <button type="submit" className="contact-form-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <ScrollArrow />
    </section>
  );
};
