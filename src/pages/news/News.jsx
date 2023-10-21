import { useState } from "react";
import GymPng from "../../images/gym-news.png";
import { NewsPopUp } from "./components/NewsPopUp";

export const News = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  return (
    <section className="news" id="newsId">
      <NewsPopUp
        isActive={isActive1}
        h2="WELCOME TO CROSSFIT"
        p="Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      />
      <NewsPopUp isActive={isActive2} h2="rame22" p="ragaca aqac2" />
      <NewsPopUp isActive={isActive3} h2="rame33" p="ragaca aqac3" />
      <NewsPopUp isActive={isActive4} h2="rame44" p="ragaca aqac4" />
      <NewsPopUp isActive={isActive5} h2="rame55" p="ragaca aqac5" />
      <NewsPopUp isActive={isActive6} h2="rame66" p="ragaca aqac6" />
      <div className="news-top">
        <div className="news-wrap">
          <h1 className="news-title">
            <span className="news-block"></span> NEWS
          </h1>
        </div>
      </div>

      <div className="news-flex">
        <div className="news-flex-top">
          <div onClick={() => setIsActive1(true)} className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">April 9, 2023</p>
            </div>
            <h3 className="flex-main-title">
              PREPARE, BE CONFIDENT, MOVE FORWARD
            </h3>
          </div>
          <div onClick={() => setIsActive2(true)} className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">June 15, 2023</p>
            </div>
            <h3 className="flex-main-title">
              READY TO ROCK WITH THIS INNOVATIVE TRAINING SYSTEM
            </h3>
          </div>
          <div onClick={() => setIsActive3(true)} className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">May 12, 2023</p>
            </div>
            <h3 className="flex-main-title">FITNESS & SELF CONTROL</h3>
          </div>
          <div onClick={() => setIsActive4(true)} className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">May 12, 2023</p>
            </div>
            <h3 className="flex-main-title">
              BEST EXERCISES TO TRAIN YOUR MIND
            </h3>
          </div>
          <div onClick={() => setIsActive5(true)} className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">May 12, 2023</p>
            </div>
            <h3 className="flex-main-title">FITNESS & SELF CONTROL</h3>
          </div>
          <div onClick={() => setIsActive6(true)} className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">May 12, 2023</p>
            </div>
            <h3 className="flex-main-title">FITNESS & SELF CONTROL</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
