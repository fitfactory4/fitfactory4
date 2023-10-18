import { Link } from "react-router-dom";
import { ScrollArrow } from "../../../ScrollArrow";
import landingImg from "../../../../images/landingImg.png";
export const IntroPage = () => {
  return (
    <section className="container" id="home">
      <div className="container-top">
        <div className="container-left">
          <div className="container-flex">
            <div className="landing-title-line"></div>
            <h1 className="landing-title">
              THE FIRST EVER MIXED MARTIAL ARTS WEBSITE TEMPLATE FOR US.
            </h1>
          </div>
          <p className="landing-text">
            Showcase your team, enlist students to classes, sell MMA products
            and grow your Mixed Martial Arts academy online.
          </p>
          <div className="btn-flex">
            <Link to="/start-trial" className="btn btn1 button-49">
              JOIN US
            </Link>
            <a href="#about-us" className="btn btn2">
              ABOUT US
            </a>
          </div>
        </div>
        <div className="container-right">
          <img className="landing-img" src={landingImg} alt="landing-img" />
        </div>
      </div>
      <ScrollArrow />
    </section>
  );
};
