import globe from "../images/globe.svg";
import { LanguageContext } from "../services";
import { useContext, useState } from "react";

export const Globe = () => {
  const [isGlobeTrue, setGlobeTrue] = useState(false);

  const { changeLanguage } = useContext(LanguageContext);

  const MakeGlobTrue = () => {
    setGlobeTrue(true);
  };
  const MakeGlobFalse = () => {
    setGlobeTrue(false);
  };

  const handleKaClick = () => {
    changeLanguage("ka");
    setGlobeTrue(false);
  };
  const handleEnClick = () => {
    changeLanguage("en");
    setGlobeTrue(false);
  };

  return (
    <div className="main-globe">
      <div
        onClick={isGlobeTrue ? MakeGlobFalse : MakeGlobTrue}
        className="globe-flex"
      >
        <img className="globe-svg" src={globe} alt="globe.svg" />
      </div>
      <div className={isGlobeTrue ? "langs-flex-active" : "langs-flex"}>
        <button className="lang-btn ka-btn" onClick={handleKaClick}>
          ქართული
        </button>
        <button className="lang-btn en-btn" onClick={handleEnClick}>
          English
        </button>
      </div>
    </div>
  );
};
