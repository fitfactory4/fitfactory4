import { HashLink as Link } from "react-router-hash-link";
import { ScrollArrow } from "../../../ScrollArrow";
import landingImg from "../../../../images/landingImg.png";
import { LanguageContext } from "../../../../services";
import { useContext } from "react";

export const IntroPage = () => {
  const { langs, language } = useContext(LanguageContext);

  return (
    <section className="container" id="home">
      <div className="container-top">
        <div className="container-left">
          <div className="container-flex">
            <div className="landing-title-line"></div>
            <h1 className="landing-title">
              {langs[language].home.introPage.h1}
            </h1>
          </div>
          <p className="landing-text">{langs[language].home.introPage.p}</p>
          <div className="btn-flex">
            <Link smooth to="/start-trial#" className="btn btn1 button-49">
              {langs[language].home.introPage.link}
            </Link>
            <a href="#about-us" className="btn btn2">
              {langs[language].home.introPage.aboutUs.btnName}
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
