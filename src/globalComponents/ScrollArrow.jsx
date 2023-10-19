import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import scrollArrow from "../images/scrollArrow.svg";

export const ScrollArrow = () => {
  const [arrowActive, setArrowActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 350) {
      setArrowActive(true);
    } else {
      setArrowActive(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={arrowActive ? "scroll-btn-active" : "scroll-btn"}>
      <Link smooth to="#">
        <img
          src={scrollArrow}
          alt="scrollArrow-svg"
          className="scroll-img"
          title="scroll-top"
        />
      </Link>
    </div>
  );
};
