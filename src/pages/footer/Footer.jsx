import instagram from "../../images/instagram.png";
import insta1 from "../../images/insta-1.png";
import insta2 from "../../images/insta-2.png";
import insta3 from "../../images/insta-3.png";
import insta4 from "../../images/insta-4.png";
import instaFooter from "../../images/insta-footer.png";
import instaFooter2 from "../../images/insta-footer-2.png";
import instaFooter3 from "../../images/insta-footer-3.png";
import { LanguageContext } from "../../services";
import { useContext } from "react";

export const Footer = () => {
  const { langs, language } = useContext(LanguageContext);

  return (
    <footer className="footer" id="main-footer">
      <div className="social-media">
        <div className="social-media-top">
          <img className="insta-icon" src={instagram} alt="instagram-icon" />
          <p className={langs[language].footer.pClassName}>
            {langs[language].footer.p}
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.4266812639958!2d42.66886237532179!3d42.269414440824654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8d00a9711b21%3A0xed211ee6f8a8aaa7!2sFit%20Factory!5e0!3m2!1sen!2sge!4v1698053060816!5m2!1sen!2sge"
          width="100%"
          height="400"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
        <div className="social-icon">
          <div className="sc-icon-box">
            <img className="social-child-icon" src={insta1} alt="insta-icon" />
          </div>
          <div className="sc-icon-box">
            <img className="social-child-icon" src={insta2} alt="insta-icon" />
          </div>
          <div className="sc-icon-box">
            <img className="social-child-icon" src={insta3} alt="insta-icon" />
          </div>
          <div className="sc-icon-box">
            <img className="social-child-icon" src={insta4} alt="insta-icon" />
          </div>
        </div>
      </div>
      <div className={langs[language].footer.footerTop}>
        <div className="footer-left">
          <h5 className={langs[language].footer.h5firstClassName}>
            {langs[language].footer.h5first}
          </h5>
          <div className="footer-left-flex">
            <p className={langs[language].footer.pBottomClassName}>
              {langs[language].footer.p1} 09:00-20:00
            </p>
            <p className={langs[language].footer.pBottomClassName}>
              {langs[language].footer.p2} 09:00-18:00
            </p>
            <p className={langs[language].footer.pBottomClassName}>
              {langs[language].footer.p3} 09:00-18:00
            </p>
          </div>
        </div>
        <div className={langs[language].footer.footerMiddleClassName}>
          <h4 className={langs[language].footer.h4FooterClassName}>
            FITFACTORY
          </h4>
          <div className="footer-middle-flex">
            <a
              href="https://www.instagram.com/fitfactory_official_georgia/"
              target="_blank"
            >
              <img
                className="footer-icon"
                src={instaFooter}
                alt="insta-svg"
                title="instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100085191204410"
              target="_blank"
            >
              <img
                className="footer-icon footer-icon-middle"
                src={instaFooter2}
                alt="fb-svg"
                title="facebook"
              />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h5 className={langs[language].footer.h5secondClassName}>
            {langs[language].footer.h5second}
          </h5>
          <div className="footer-right-flex">
            <p className={langs[language].footer.pBottomClassName}>
              Fitfactory, buxaidze N17
            </p>
            <p className={langs[language].footer.pBottomClassName}>
              +1800-001-658
            </p>
            <p className={langs[language].footer.pBottomClassName}>
              fitfactory2023@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
