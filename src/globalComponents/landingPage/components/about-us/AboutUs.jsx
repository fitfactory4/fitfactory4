import { InfoIconBox } from "../../../InfoIconBox";
import discount from "../../../../images/discount.svg";
import { LanguageContext } from "../../../../services";
import { useContext } from "react";

export const AboutUs = () => {
  const { langs, language } = useContext(LanguageContext);

  const iconBoxes = [
    {
      image: discount,
      text: langs[language].home.introPage.aboutUs.h5.first,
      className: "info-box-1",
    },
    {
      image: discount,
      text: langs[language].home.introPage.aboutUs.h5.second,
      className: "info-box-2",
    },
    {
      image: discount,
      text: langs[language].home.introPage.aboutUs.h5.third,
      className: "info-box-3",
    },
    {
      image: discount,
      text: langs[language].home.introPage.aboutUs.h5.forth,
      className: "info-box-4",
    },
    {
      image: discount,
      text: langs[language].home.introPage.aboutUs.h5.fifth,
      className: "info-box-5",
    },
  ];

  return (
    <main className="about" id="about-us">
      <div className="about-top-content">
        <h2 className="about-title-text">
          {langs[language].home.introPage.aboutUs.sectionName}
        </h2>
        <div className="about-line"></div>
      </div>
      <div className="info">
        <div className="info-top">
          <h3 className="info-title">
            <span className="info-span">
              {langs[language].home.introPage.aboutUs.h3First}
            </span>
            {langs[language].home.introPage.aboutUs.h3Second}
          </h3>
          <div className="info-flex">
            <div className="info-line"></div>
            <div className="info-text">
              {langs[language].home.introPage.aboutUs.div}
            </div>
          </div>
          <div className="info-wrapper">
            <div className="info-wrapper-top">
              {iconBoxes.map((iconBox, index) => (
                <InfoIconBox
                  key={index}
                  image={iconBox.image}
                  text={iconBox.text}
                  className={iconBox.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
