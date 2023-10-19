import instagram from "../../images/instagram.png";
import insta1 from "../../images/insta-1.png";
import insta2 from "../../images/insta-2.png";
import insta3 from "../../images/insta-3.png";
import insta4 from "../../images/insta-4.png";
import instaFooter from "../../images/insta-footer.png";
import instaFooter2 from "../../images/insta-footer-2.png";
import instaFooter3 from "../../images/insta-footer-3.png";

export const Footer = () => {
  return (
    <footer className="footer" id="main-footer">
      <div className="social-media">
        <div className="social-media-top">
          <img className="insta-icon" src={instagram} alt="instagram-icon" />
          <p className="footer-p-social">FOLLOW US ON INSTAGRAM</p>
        </div>
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
      <div className="footer-top">
        <div className="footer-left">
          <h5 className="footer-left-title">OPEN HOURS</h5>
          <div className="footer-left-flex">
            <p>Monday to Friday 09:00-20:00</p>
            <p>Saturday: 09:00-18:00</p>
            <p>Sunday: 09:00-18:00</p>
          </div>
        </div>
        <div className="footer-middle">
          <h4 className="footer-logo">FITFACTORY</h4>
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
            <a href="#">
              <img
                className="footer-icon"
                src={instaFooter3}
                alt="tik-tok-svg"
                title="tik-tok"
              />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h5 className="footer-right-title">CONTACT US</h5>
          <div className="footer-right-flex">
            <p>Fitfactory, buxaidze N17</p>
            <p>+1800-001-658</p>
            <p>fitfactory2023@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
