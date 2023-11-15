import arrowLeft from "../images/arrowLeft.svg";
import { HashLink as Link } from "react-router-hash-link";

export const ArrowLeft = () => {
  return (
    <Link to={"/#blogs"} className="arrow-post">
      <img className="arrow-post-svg" src={arrowLeft} alt="arrow-left.svg" />
    </Link>
  );
};
