import React, { useState } from "react";
import trainer1 from "../../../../images/trainer1.png";
import vectorLeft from "../../../../images/vectorLeft.png";
import vectorRight from "../../../../images/vectorRight.png";

export const Trainers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      text: "So thoughtful and wise, and vulnerable in sharing her own challenges with me. Dani is wonderful!",
      textClassName: "slider-text-1 slider-text",
      title: "Anette Black",
      titleClassName: "carousel-info-title carousel-1-title",
      jobDescription: "Director, Trainer",
      className: "trainer-box-1",
    },
    {
      id: 2,
      icon: trainer1,
      text: "we successfully converted your file! You can now download ",
      textClassName: "slider-text-2 slider-text",
      title: "Jack London",
      titleClassName: "carousel-info-title carousel-2-title",
      jobDescription: "Director, Trainer",
      className: "trainer-box-2",
    },
    {
      id: 3,
      icon: trainer1,
      text: "You have even more images you need in a different format? Go ahead and convert ",
      textClassName: "slider-text-3 slider-text",
      title: "Emilly Witson",
      titleClassName: "carousel-info-title carousel-3-title",
      jobDescription: "Director, Trainer",
      className: "trainer-box-3",
    },
    {
      id: 4,
      icon: trainer1,
      text: "You want to convert an image, video or PDF document to JPG? Then our JPEG converter is the best",
      textClassName: "slider-text-4 slider-text",
      title: "Ketty Perry",
      titleClassName: "carousel-info-title carousel-4-title",
      jobDescription: "Director, Trainer",
      className: "trainer-box-4",
    },
    {
      id: 5,
      icon: trainer1,
      text: "Convert your edited image into the most common, widely supported, and versatile raster image format that is known as JPG or JPEG.",
      textClassName: "slider-text-5 slider-text",
      title: "Batman Jokery",
      titleClassName: "carousel-info-title carousel-5-title",
      jobDescription: "Director, Trainer",
      className: "trainer-box-5",
    },
  ];

  return (
    <div className={`main-trainer${activeIndex}`} id="trainers">
      <p className="trainers-main-title">TRAINERS</p>
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
