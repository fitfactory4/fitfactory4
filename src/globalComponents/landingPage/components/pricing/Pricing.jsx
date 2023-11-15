import { HashLink as Link } from "react-router-hash-link";
import checkIicon from "../../../../images/check-icon.png";
import yellowCheckIcon from "../../../../images/yellow-checkIcon.png";
import { LanguageContext } from "../../../../services";
import { useContext } from "react";

export const Pricing = () => {
  const { langs, language } = useContext(LanguageContext);

  return (
    <section className="main-pricing" id="pricing">
      <div className="about-top-content">
        <h2 className="about-title-text">
          {langs[language].home.pricing.navLinkTitle}
        </h2>
        <div className="about-line"></div>
      </div>
      <div className="pricing-top">
        <div className="pricing-box price-index-1">
          <h5 className={langs[language].home.pricing.box1.h5ClassName}>
            {langs[language].home.pricing.box1.h5}
          </h5>
          <h4 className="price-title center-date-price">
            {langs[language].home.pricing.box1.h4}{" "}
            <span className="price-sign">$</span>
          </h4>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">{langs[language].home.pricing.box1.p1}</p>
          </div>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">{langs[language].home.pricing.box1.p2}</p>
          </div>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">{langs[language].home.pricing.box1.p3}</p>
          </div>
          <Link
            smooth
            to="/starttrial#"
            className={langs[language].home.pricing.linkClassName}
          >
            {langs[language].home.pricing.link}
          </Link>
        </div>
        <div className="pricing-box price-index-2">
          <h5 className={langs[language].home.pricing.box2.h5ClassName}>
            {langs[language].home.pricing.box2.h5}
          </h5>
          <h4 className="price-title center-date-price">
            {langs[language].home.pricing.box2.h4}{" "}
            <span className="price-sign">$</span>
          </h4>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">{langs[language].home.pricing.box2.p1}</p>
          </div>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">{langs[language].home.pricing.box2.p2}</p>
          </div>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">{langs[language].home.pricing.box2.p3}</p>
          </div>
          <Link
            smooth
            to="/starttrial#"
            className={langs[language].home.pricing.linkClassName}
          >
            {langs[language].home.pricing.link}
          </Link>
        </div>
        <div className="pricing-box price-index-3">
          <h5 className={langs[language].home.pricing.box3.h5ClassName}>
            {langs[language].home.pricing.box3.h5}
          </h5>
          <h4 className="price-title center-date-price">
            {langs[language].home.pricing.box3.h4}{" "}
            <span className="price-sign price-sign-diff">$</span>
          </h4>
          <div className="price-ul">
            <img
              className="price-svg"
              src={yellowCheckIcon}
              alt="check-icon-svg"
            />
            <p className="price-text">{langs[language].home.pricing.box3.p1}</p>
          </div>
          <div className="price-ul">
            <img
              className="price-svg"
              src={yellowCheckIcon}
              alt="check-icon-svg"
            />
            <p className="price-text">{langs[language].home.pricing.box3.p2}</p>
          </div>
          <div className="price-ul">
            <img
              className="price-svg"
              src={yellowCheckIcon}
              alt="check-icon-svg"
            />
            <p className="price-text">{langs[language].home.pricing.box3.p3}</p>
          </div>
          <Link
            smooth
            to="/starttrial#"
            className={
              langs[language].home.pricing.linkClassName +
              langs[language].home.pricing.lastLinkClassName
            }
          >
            {langs[language].home.pricing.link}
          </Link>
        </div>
      </div>
    </section>
  );
};
