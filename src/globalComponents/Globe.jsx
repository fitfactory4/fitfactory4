import globe from "../images/globe.svg";
import { LanguageContext } from "../services";
import { BlogPageContext } from "../services";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList, blogListEn } from "../services";

export const Globe = () => {
  const [isGlobeTrue, setGlobeTrue] = useState(false);

  const { changeLanguage, langs, language } = useContext(LanguageContext);
  const { setBlogPage, blogPage, blogKa, blogEn } = useContext(BlogPageContext);

  const MakeGlobTrue = () => {
    setGlobeTrue(true);
  };
  const MakeGlobFalse = () => {
    setGlobeTrue(false);
  };

  const handleKaClick = () => {
    changeLanguage("ka");
    setGlobeTrue(false);
    setBlogPage(blogKa);
    console.log(blogPage);
  };
  const handleEnClick = () => {
    changeLanguage("en");
    setGlobeTrue(false);
    setBlogPage(blogEn);
    console.log(blogPage);
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
