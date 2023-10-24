import { HashLink as Link } from "react-router-hash-link";
import squareImg from "../../../../images/squareImg.png";
import { LanguageContext } from "../../../../services";
import { useContext } from "react";

export const Pilates = () => {
  const { langs, language } = useContext(LanguageContext);

  return (
    <section className="pilates">
      <div className="pilates-top">
        <div className="pilates-left">
          <h4 className="pilates-title">
            <span className="pilates-span">
              {langs[language].home.introPage.pilates.h4First}
            </span>
            {langs[language].home.introPage.pilates.h4Second}
          </h4>
          <p className="pilates-text">
            {langs[language].home.introPage.pilates.p}
          </p>
          <Link smooth to="/blog#" className="pilates-link">
            {langs[language].home.introPage.pilates.link}
          </Link>
        </div>
        <div className="pilates-right">
          <img className="pilates-img" src={squareImg} alt="pilates-img" />
        </div>
      </div>
    </section>
  );
};
