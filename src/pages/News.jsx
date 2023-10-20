import GymPng from "../images/gym-news.png";

export const News = () => {
  return (
    <section className="news" id="newsId">
      <div className="news-top">
        <div className="news-wrap">
          <h1 className="news-title">
            <span className="news-block"></span> NEWS
          </h1>
        </div>
      </div>

      <div className="news-flex">
        <div className="news-flex-top">
          <div className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">April 9, 2023</p>
            </div>
            <h3 className="flex-main-title">
              PREPARE, BE CONFIDENT, MOVE FORWARD
            </h3>
          </div>
          <div className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">June 15, 2023</p>
            </div>
            <h3 className="flex-main-title">
              READY TO ROCK WITH THIS INNOVATIVE TRAINING SYSTEM
            </h3>
          </div>
          <div className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">May 12, 2023</p>
            </div>
            <h3 className="flex-main-title">FITNESS & SELF CONTROL</h3>
          </div>
          <div className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">May 12, 2023</p>
            </div>
            <h3 className="flex-main-title">
              BEST EXERCISES TO TRAIN YOUR MIND
            </h3>
          </div>
          <div className="news-flex-box">
            <div className="flex-item">
              <img className="news-main-png" src={GymPng} alt="location-icon" />
              <p className="news-date">May 12, 2023</p>
            </div>
            <h3 className="flex-main-title">FITNESS & SELF CONTROL</h3>
          </div>
          <div className="news-flex-box">
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
