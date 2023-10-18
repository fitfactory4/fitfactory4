import { Link } from "react-router-dom";
import checkIicon from "../../../../images/check-icon.png";
import yellowCheckIcon from "../../../../images/yellow-checkIcon.png";

export const Pricing = () => {
  return (
    <section className="main-pricing" id="pricing">
      <div className="about-top-content">
        <h2 className="about-title-text">PRICING</h2>
        <div className="about-line"></div>
      </div>
      <div className="pricing-top">
        <div className="pricing-box price-index-1">
          <h5 className="date-of-pricingBox center-date-price">ONE DAY PASS</h5>
          <h4 className="price-title center-date-price">
            40 <span className="price-sign">$</span>
          </h4>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">Adjustable schedule</p>
          </div>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">Taught by Experienced Trainers</p>
          </div>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">Adjustable schedule </p>
          </div>
          <Link to="/start-trial" className="price-btn">
            SEE DETAILS
          </Link>
        </div>
        <div className="pricing-box price-index-2">
          <h5 className="date-of-pricingBox center-date-price">MONTHLY PASS</h5>
          <h4 className="price-title center-date-price">
            79 <span className="price-sign">$</span>
          </h4>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">Adjustable schedule</p>
          </div>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">Taught by Experienced Trainers</p>
          </div>
          <div className="price-ul">
            <img className="price-svg" src={checkIicon} alt="check-icon-svg" />
            <p className="price-text">Adjustable schedule </p>
          </div>
          <Link to="/start-trial" className="price-btn">
            SEE DETAILS
          </Link>
        </div>
        <div className="pricing-box price-index-3">
          <h5 className="date-of-pricingBox center-date-price">YEARLY PASS</h5>
          <h4 className="price-title center-date-price">
            110 <span className="price-sign price-sign-diff">$</span>
          </h4>
          <div className="price-ul">
            <img
              className="price-svg"
              src={yellowCheckIcon}
              alt="check-icon-svg"
            />
            <p className="price-text">Adjustable schedule</p>
          </div>
          <div className="price-ul">
            <img
              className="price-svg"
              src={yellowCheckIcon}
              alt="check-icon-svg"
            />
            <p className="price-text">Taught by Experienced Trainers</p>
          </div>
          <div className="price-ul">
            <img
              className="price-svg"
              src={yellowCheckIcon}
              alt="check-icon-svg"
            />
            <p className="price-text">Adjustable schedule </p>
          </div>
          <Link to="/start-trial" className="price-btn last-price-btn">
            SEE DETAILS
          </Link>
        </div>
      </div>
    </section>
  );
};
