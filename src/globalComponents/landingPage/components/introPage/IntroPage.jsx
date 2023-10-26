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
            <div
              className={langs[language].home.introPage.landingTiTleLine}
            ></div>
            <h1 className={langs[language].home.introPage.h1ClassName}>
              {langs[language].home.introPage.h1}
              <span className={langs[language].home.introPage.h12ClassName}>
                {langs[language].home.introPage.h12}
              </span>
            </h1>
          </div>
          <p className={langs[language].home.introPage.pClassName}>
            {langs[language].home.introPage.p}
          </p>
          <div className="btn-flex">
            <Link
              smooth
              to="/start-trial#"
              className={langs[language].home.introPage.linkClassName}
            >
              {langs[language].home.introPage.link}
            </Link>
            <a
              href="#about-us"
              className={langs[language].home.introPage.aboutUs.btnClassName}
            >
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
