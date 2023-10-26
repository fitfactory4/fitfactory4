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
      h5className: langs[language].home.introPage.aboutUs.h5.ClassName,
    },
    {
      image: discount,
      text: langs[language].home.introPage.aboutUs.h5.second,
      className: "info-box-2",
      h5className: langs[language].home.introPage.aboutUs.h5.ClassName,
    },
    {
      image: discount,
      text: langs[language].home.introPage.aboutUs.h5.third,
      className: "info-box-3",
      h5className: langs[language].home.introPage.aboutUs.h5.ClassName,
    },
    {
      image: discount,
      text: langs[language].home.introPage.aboutUs.h5.forth,
      className: "info-box-4",
      h5className: langs[language].home.introPage.aboutUs.h5.ClassName,
    },
    {
      image: discount,
      text: langs[language].home.introPage.aboutUs.h5.fifth,
      className: "info-box-5",
      h5className: langs[language].home.introPage.aboutUs.h5.ClassName,
    },
  ];

  return (
    <main className="about" id="about-us">
      <div className="about-top-content">
        <h2
          className={
            langs[language].home.introPage.aboutUs.sectionNameClassName
          }
        >
          {langs[language].home.introPage.aboutUs.sectionName}
        </h2>
        <div className="about-line"></div>
      </div>
      <div className="info">
        <div className="info-top">
          <h3
            className={langs[language].home.introPage.aboutUs.h3SecondClassName}
          >
            <span
              className={
                langs[language].home.introPage.aboutUs.h3FirstClassName
              }
            >
              {langs[language].home.introPage.aboutUs.h3First}
            </span>
            {langs[language].home.introPage.aboutUs.h3Second}
          </h3>
          <div className="info-flex">
            <div
              className={langs[language].home.introPage.aboutUs.lineClassName}
            ></div>
            <div
              className={langs[language].home.introPage.aboutUs.divClassName}
            >
              {langs[language].home.introPage.aboutUs.div}
            </div>
          </div>
          <div className="info-wrapper">
            <div
              className={
                langs[language].home.introPage.aboutUs.infoWrapperClassName
              }
            >
              {iconBoxes.map((iconBox, index) => (
                <InfoIconBox
                  key={index}
                  image={iconBox.image}
                  text={iconBox.text}
                  className={iconBox.className}
                  h5ClassName={iconBox.h5className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
