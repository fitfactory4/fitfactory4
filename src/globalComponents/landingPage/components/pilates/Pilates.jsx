import { Link } from "react-router-dom";
import squareImg from "../../../../images/squareImg.png";

export const Pilates = () => {
  return (
    <section className="pilates">
      <div className="pilates-top">
        <div className="pilates-left">
          <h4 className="pilates-title">
            <span className="pilates-span">PILATES</span> GROUP EXCERCIES
          </h4>
          <p className="pilates-text">
            Supported by a network of early advocates, contributors, and
            champions. We are gladly helping companies to get started.
          </p>
          <Link to="/news" className="pilates-link">
            SEE DETAILS
          </Link>
        </div>
        <div className="pilates-right">
          <img className="pilates-img" src={squareImg} alt="pilates-img" />
        </div>
      </div>
    </section>
  );
};
