import GymPng from "../../images/gym-news.png";
import { BlogPost } from "./components";

export const blogs = [
  {
    png: GymPng,
    p: "April 9, 2023",
    h3: "PREPARE, BE CONFIDENT, MOVE FORWARD",
    to: {
      link: "1",
      h2: "blogsss",
      p: "sknskdnskdnskdn",
    },
  },
  {
    png: GymPng,
    p: "June 15, 2023",
    h3: "READY TO ROCK WITH THIS INNOVATIVE TRAINING SYSTEM",
    to: {
      link: "2",
      h2: "blogsss",
      p: "sknskdnskdnskdn",
    },
  },
  {
    png: GymPng,
    p: "May 12, 2023",
    h3: "FITNESS & SELF CONTROL",
    to: {
      link: "3",
      h2: "blogsss",
      p: "sknskdnskdnskdn",
    },
  },
  {
    png: GymPng,
    p: "May 12, 2023",
    h3: "BEST EXERCISES TO TRAIN YOUR MIND",
    to: {
      link: "4",
      h2: "blogsss",
      p: "sknskdnskdnskdn",
    },
  },
  {
    png: GymPng,
    p: "May 12, 2023",
    h3: "FITNESS & SELF CONTRO",
    to: {
      link: "5",
      h2: "blogsss",
      p: "sknskdnskdnskdn",
    },
  },
  {
    png: GymPng,
    p: "May 12, 2023",
    h3: "FITNESS & SELF CONTRO",
    to: {
      link: "6",
      h2: "blogsss",
      p: "sknskdnskdnskdn",
    },
  },
];

export const Blog = () => {
  return (
    <section className="news" id="newsId">
      <div className="news-top">
        <div className="news-wrap">
          <h1 className="news-title">
            <span className="news-block"></span> BLOGS
          </h1>
        </div>
      </div>

      <div className="news-flex">
        <div className="news-flex-top">
          {blogs.map((blog, index) => (
            <BlogPost
              to={`/blogs/#${blog.to.link}`}
              key={index}
              blogPng={blog.png}
              p={blog.p}
              h3={blog.h3}
            />
          ))}
          {/* <div className="news-flex-box">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};
