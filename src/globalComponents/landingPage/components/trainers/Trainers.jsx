import React, { useState, useContext } from "react";
import { LanguageContext } from "../../../../services";
import trainer1 from "../../../../images/trainer1.png";
import vectorLeft from "../../../../images/vectorLeft.png";
import vectorRight from "../../../../images/vectorRight.png";

export const Trainers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { langs, language } = useContext(LanguageContext);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const items = [
    {
      id: 1,
      icon: trainer1,
      text: langs[language].home.trainers.trainer1.text,
      textClassName: "slider-text-1 slider-text",
      title: langs[language].home.trainers.trainer1.title,
      titleClassName: "carousel-info-title carousel-1-title",
      jobDescription: langs[language].home.trainers.trainer1.jobDescription,
      className: "trainer-box-1",
    },
    {
      id: 2,
      icon: trainer1,
      text: langs[language].home.trainers.trainer2.text,
      textClassName: "slider-text-2 slider-text",
      title: langs[language].home.trainers.trainer2.title,
      titleClassName: "carousel-info-title carousel-2-title",
      jobDescription: langs[language].home.trainers.trainer2.jobDescription,
      className: "trainer-box-2",
    },
    {
      id: 3,
      icon: trainer1,
      text: langs[language].home.trainers.trainer3.text,
      textClassName: "slider-text-3 slider-text",
      title: langs[language].home.trainers.trainer3.title,
      titleClassName: "carousel-info-title carousel-3-title",
      jobDescription: langs[language].home.trainers.trainer3.jobDescription,
      className: "trainer-box-3",
    },
    {
      id: 4,
      icon: trainer1,
      text: langs[language].home.trainers.trainer4.text,
      textClassName: "slider-text-4 slider-text",
      title: langs[language].home.trainers.trainer4.title,
      titleClassName: "carousel-info-title carousel-4-title",
      jobDescription: langs[language].home.trainers.trainer4.jobDescription,
      className: "trainer-box-4",
    },
    {
      id: 5,
      icon: trainer1,
      text: langs[language].home.trainers.trainer5.text,
      textClassName: "slider-text-5 slider-text",
      title: langs[language].home.trainers.trainer5.title,
      titleClassName: "carousel-info-title carousel-5-title",
      jobDescription: langs[language].home.trainers.trainer5.jobDescription,
      className: "trainer-box-5",
    },
  ];

  return (
    <div className={`main-trainer${activeIndex}`} id="trainers">
      <p className="trainers-main-title">
        {langs[language].home.trainers.navLinkTitle}
      </p>
      <div className="carousel-container">
        <div className="carousel">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${item.className} carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div className="carousel-flex">
                <img
                  className="vector vectorLeft"
                  src={vectorLeft}
                  onClick={prevSlide}
                  alt="vectorLeft-svg"
                />
                <img
                  className="trainer-icon"
                  src={item.icon}
                  alt="trainer-icon"
                />
                <img
                  className="vector vectorRight"
                  src={vectorRight}
                  onClick={nextSlide}
                  alt="vectorRight-svg"
                />
              </div>
              <p className={item.textClassName}>{item.text}</p>
              <div className="carousel-info">
                <p className={item.titleClassName}>{item.title}</p>
                <p className="carousel-info-text">{item.jobDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
