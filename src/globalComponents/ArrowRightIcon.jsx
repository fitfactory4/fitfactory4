import arrowRightIcon from "../images/arrowRightIcon.svg";
import { LanguageContext } from "../services";
import { useContext } from "react";

export const ArrowRightIcon = () => {
  const { langs, language } = useContext(LanguageContext);

  return (
    <div className="arrow-right-icon-div">
      <img
        className={langs[language].home.introPage.navArrowClassName}
        src={arrowRightIcon}
        alt="arrowRightIcon-svg"
      />
    </div>
  );
};
